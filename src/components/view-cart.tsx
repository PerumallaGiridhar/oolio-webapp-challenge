import { useCart } from "@/hooks/use-cart";
import { Button } from "./ui/button";
import { IconCircleX } from "@tabler/icons-react";
import useProductsQuery from "@/hooks/use-products";
import ConfirmOrder from "./confirm-order";

const ViewCart = () => {
  const { items, removeFromCart } = useCart();
  const products = useProductsQuery();
  return (
    <div className="flex flex-col w-fit md:w-96 h-fit  bg-white rounded-lg p-6 gap-2">
      <p className="font-medium text-2xl text-[#C66C50]">
        Your Cart {"(" + items.length.toString() + ")"}
      </p>
      {items.length == 0 && (
        <div className="flex flex-col w-full h-60 items-center justify-center">
          <img src="/cake.svg" />
          <p className="text-[#988A87] font-medium text-sm">
            Your added items will appear here
          </p>
        </div>
      )}
      {items.length > 0 && (
        <div className="flex flex-col gap-4">
          {items.map((item) => {
            return (
              <div className="flex py-2 justify-between border-b border-b-[#F3F3F3]">
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-xs text-[#716A67]">
                    {products.data?.find((p) => p.id == item.productId)?.name}
                  </p>
                  <div className="flex gap-4 items-center">
                    <p className="font-medium text-sm text-[#C08778]">
                      {item.quantity}x
                    </p>
                    <p className="font-medium text-xs text-[#B2A8A6]">
                      @
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "usd",
                      }).format(
                        products.data?.find((p) => p.id == item.productId)
                          ?.price ?? 0
                      )}
                    </p>
                    <p className="font-medium text-xs text-[#B2A8A6]">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "usd",
                      }).format(
                        (products.data?.find((p) => p.id == item.productId)
                          ?.price ?? 0) * item.quantity
                      )}
                    </p>
                  </div>
                </div>
                <Button
                  variant={"ghost"}
                  size={"icon"}
                  onClick={() => {
                    removeFromCart(item.productId, item.quantity);
                  }}
                >
                  <IconCircleX className="size-5 text-[#A28185]" />
                </Button>
              </div>
            );
          })}
        </div>
      )}
      {items.length > 0 && (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center py-4">
            <p className="text-[#928D8B] font-medium text-xs">Order Total</p>
            <p className="font-medium text-xl">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "usd",
              }).format(
                items.reduce((acc, item) => {
                  acc =
                    acc +
                    item.quantity *
                      (products.data?.find((p) => p.id == item.productId)
                        ?.price ?? 0);
                  return acc;
                }, 0)
              )}
            </p>
          </div>
          <div className="flex gap-2 items-center justify-center p-4 bg-[#FBF7F4] rounded">
            <img src="/carbon-neutral.svg" />
            <div className="flex gap-1">
              <p className="text-[#968D8B] font-medium text-xs">This is </p>
              <p className="text-[#837975] font-bold text-xs">
                {" carbon-neutral "}
              </p>
              <p className="text-[#968D8B] font-medium text-xs">delivery</p>
            </div>
          </div>
              <ConfirmOrder/>
        </div>
      )}
    </div>
  );
};

export default ViewCart;
