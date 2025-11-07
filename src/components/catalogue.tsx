import { IconCircleMinus, IconCirclePlus } from "@tabler/icons-react";
import AddToCart from "@/components/icons/add-to-cart";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import useProductsQuery from "@/hooks/use-products";

const Catalogue = () => {
  const productsQuery = useProductsQuery();
  const { items, addToCart, removeFromCart } = useCart();
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-y-4 gap-x-2 grid-rows-3">
      {productsQuery.data?.map((product) => {
        return (
          <div className="flex flex-col gap-1 w-64 p-1">
            {items.find((i) => i.productId == product.id)?.quantity ?? 0 > 0 ? (
              <div className="relative flex-col w-fit justify-center">
                <img
                  className="h-60 rounded-lg border-2 border-[#C63B0F]"
                  src={product.image.desktop}
                />
                <div className="absolute w-30 h-9 -bottom-4 bg-[#C63B0F] right-1/2  translate-x-1/2 rounded-2xl shadow-md">
                  <div className="flex justify-between gap-1 items-center">
                    <Button
                      variant={"ghost"}
                      size={"icon"}
                      className="hover:rounded-2xl hover:bg-[#FCF8F5]"
                      onClick={() => {
                        removeFromCart(product.id, 1);
                      }}
                    >
                      <IconCircleMinus className="text-[#EAB096]" />
                    </Button>
                    <p className="text-[#EAB096] font-medium text-sm">
                      {items.find((i) => i.productId == product.id)?.quantity}
                    </p>
                    <Button
                      variant={"ghost"}
                      size={"icon"}
                      className="hover:rounded-2xl hover:bg-[#FCF8F5]"
                      onClick={() => {
                        addToCart(product.id, 1);
                      }}
                    >
                      <IconCirclePlus className="text-[#EAB096]" />
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative flex-col w-fit justify-center">
                <img className="h-60 rounded-lg" src={product.image.desktop} />
                <Button
                  variant={"secondary"}
                  className="absolute w-30 -bottom-4 right-1/2 bg-white translate-x-1/2 rounded-2xl shadow-md"
                  onClick={() => {
                    addToCart(product.id, 1);
                  }}
                >
                  <div className="flex items-center gap-1">
                    <AddToCart className="text-white" />
                    <p className="font-medium text-sm text-[#716A68]">
                      Add to Cart
                    </p>
                  </div>
                </Button>
              </div>
            )}
            <div className="flex flex-col gap-0 mt-5">
              <p className="text-xs font-light text-[#B6ABA8]">
                {product.category}
              </p>
              <p className="text-lg font-medium text-[#6A5F5C]">
                {product.name}
              </p>
              <p className="text-sm font-medium text-[#BA7765]">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "usd",
                }).format(product.price)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Catalogue;
