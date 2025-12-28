import { StolenItem } from "@/app/page";

interface ItemCardProps {
  item: StolenItem;
  onClick: () => void;
}

export function ItemCard({ item, onClick }: ItemCardProps) {
  return (
    <div
      onClick={onClick}
      className="group overflow-hidden cursor-pointer bg-[#18181B] outline outline-[1px] outline-[#27272A] hover:outline-[#4D4D4D]"
    >
      <div className="overflow-hidden">
        <img
          src={item.item_photo_url}
          alt={item.item_name}
          className="w-full h-[200px] object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>

      <div className="p-4 flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-1">
          <h3 className="uppercase text-[14px] font-medium">
            {item.item_name}
          </h3>
          <div className="flex items-center gap-1 text-[#71717B]">
            <span className="material-symbols-rounded !text-[16px]">
              person
            </span>
            <h2 className="text-left text-[12px]">{item.seller_username}</h2>
          </div>
          <div className="flex items-center gap-1 text-[#52525C]">
            <span className="material-symbols-rounded !text-[16px]">
              location_on
            </span>
            <h2 className="text-left text-[12px]">
              {item.seller_city}, {item.seller_country}
            </h2>
          </div>
        </div>

        <div className="bg-[#09090B] flex items-center justify-between p-[12px] outline border-solid outline-[#27272A]">
          <div>
            <p className="text-left text-[18px] font-bold text-[#FF6467]">
              ${item.item_price.toLocaleString()}
            </p>
            <div className="flex items-center gap-1 text-[#71717B]">
              <span className="material-symbols-rounded !text-[16px]">
                trending_up
              </span>
              <h2 className="text-left text-[12px]">BEST PRICE</h2>
            </div>
          </div>
          <div className="inline-flex items-center px-2 h-[26px] border border-[#82181A] bg-[#460809]">
            <p className="text-[#FF6467] font-bold text-[12px]">
              {item.item_stock} LEFT
            </p>
          </div>
        </div>
        <button className="bg-[#272729] duration-200 text-[12px] text-[#9F9FA9] border-solid outline outline-[#3F3F46] uppercase cursor-pointer w-full py-2 hover:bg-[#3F3F46]">
          VIEW DETAILS
        </button>
      </div>
    </div>
  );
}
