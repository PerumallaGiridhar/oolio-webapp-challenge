import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type CartItem = {
  productId: string;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
  addToCart: (productId: string, quantity?: number) => void;
  removeFromCart: (productId: string, quantity?: number) => void;
  clearCart: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addToCart: (productId, quantity = 0) =>
        set((state) => {
          const existing = state.items.find((i) => i.productId === productId);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.productId === productId
                  ? { ...i, quantity: i.quantity + quantity }
                  : i
              ),
            };
          }
          return {
            items: [...state.items, { productId, quantity }],
          };
        }),
      removeFromCart: (productId, quantity = 0) =>
        set((state) => {
          const existing = state.items.find((i) => i.productId === productId);
          if (!existing) return state;
          const newQty = existing.quantity - quantity;
          if (newQty > 0) {
            return {
              items: state.items.map((i) =>
                i.productId === productId ? { ...i, quantity: newQty } : i
              ),
            };
          }
          return {
            items: state.items.filter((i) => i.productId !== productId),
          };
        }),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-store",
      version: 1,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }),
    }
  )
);
