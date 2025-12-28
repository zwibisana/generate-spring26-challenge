export function WarningInfo() {
  return (
    <div className="flex flex-row gap-x-2 bg-[#18181a] p-4 border-solid outline outline-[#82181A]">
      <span className="material-symbols-rounded !text-[30px] font-bold text-[#FF6467]">
        warning
      </span>
      <div>
        <p className="text-[16px] font-bold text-[#FF6467]">WARNING</p>
        <p className="text-[14px] text-[#9F9FA9]">
          LAST CHANCE! PRICES GOING UP SOON! NO REFUNDS! FINAL SALE!
        </p>
      </div>
    </div>
  );
}
