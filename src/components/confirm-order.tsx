import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { IconCircleCheck } from "@tabler/icons-react";
import { useCart } from "@/hooks/use-cart";
import useProductsQuery from "@/hooks/use-products";

const ConfirmOrder = () => {
  const { items, clearCart } = useCart();
  const products = useProductsQuery();
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-[#C73B0E] rounded-3xl w-full h-13 hover:bg-[#C73B0E]">
          <p className="text-[#E7AB91]">Confirm Order</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="h-fit bg-white">
        <DialogHeader>
          <div className="flex flex-col gap-4">
            <IconCircleCheck className="size-10 text-green-600" />
            <p className="font-medium text-4xl">Order Confirmed</p>
          </div>
          <p className="text-[#A59B99] font-light text-sm">
            We hope you enjoy your food!
          </p>
        </DialogHeader>
        <div className="flex flex-col p-4 gap-2 bg-[#FCF8F5] not-only:rounded overflow-auto">
          {items.map((item) => {
            return (
              <div className="flex py-2 justify-between border-b border-b-[#F3F3F3]">
                <div className="flex gap-2">
                  <img
                    className="w-10 h-10 rounded"
                    src={
                      products.data?.find((p) => p.id === item.productId)?.image
                        .thumbnail
                    }
                  />
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
                    </div>
                  </div>
                </div>
                <p className="font-medium text-sm text-[#635957]">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "usd",
                  }).format(
                    (products.data?.find((p) => p.id == item.productId)
                      ?.price ?? 0) * item.quantity
                  )}
                </p>
              </div>
            );
          })}
          
        </div>
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
        <DialogClose>
          <Button
            className="bg-[#C73B0E] hover:bg-[#C73B0E] rounded-3xl w-full h-13"
            onClick={() => {
              clearCart();
            }}
          >
            <p className="text-[#E7AB91]">Start New Order</p>
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmOrder;
