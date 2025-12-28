import { StolenItem } from "../page";

interface TopBannerProps {
  items: StolenItem[];
  onSelect: (item: StolenItem) => void;
  verifiedId: string;
  hotId: string;
}

export default function TopBanner({
  items,
  onSelect,
  verifiedId,
  hotId,
}: TopBannerProps) {
  const handleClick = (id: string) => {
    const item = items.find((item) => item.id === id);
    if (item) onSelect(item);
  };

  return (
    <div className="relative bg-[#18181a] outline outline-[#27272A]">
      <div className="absolute top-0 left-0 right-0 flex justify-between px-2 py-1">
        <div
          onClick={() => handleClick(verifiedId)}
          className="flex items-center h-[26px] px-2 text-[12px] text-[#00C950] bg-[#27272A] outline outline-[#3F3F46] cursor-pointer hover:bg-[#3F3F46] duration-200"
        >
          <span className="material-symbols-rounded !text-[24px]">
            check_small
          </span>
          VERIFIED
        </div>
        <div
          onClick={() => handleClick(hotId)}
          className="h-[26px] cursor-pointer px-2 text-[12px] font-bold bg-[#E7000B] flex items-center justify-center outline outline-[#FB2C36] hover:bg-[#C10007]"
        >
          HOT
        </div>
      </div>

      <div className="text-center text-[#71717B] px-2 py-[6px] text-[12px] tracking-[0.3] font-medium">
        *** VERIFIED SELLERS ONLY *** 100% ANONYMOUS *** NO TRACKING *** FAST
        SHIPPING WORLDWIDE ***
      </div>
    </div>
  );
}
