interface TotalProps {
  total: number;
  onConfirm: () => void;
}

export function Total({ total, onConfirm }: TotalProps) {
  return (
    <div className="bg-[#09090B] p-3 outline outline-[#27272A] flex flex-col gap-y-4">
      <div className="flex justify-between items-center">
        <p className="text-[14px] text-[#71717B] uppercase">TOTAL COST:</p>
        <p className="text-[24px] font-bold text-[#FF6467]">
          ${total.toLocaleString()}
        </p>
      </div>

      <button
        onClick={onConfirm}
        className="py-4 text-[20px] duration-200 font-bold bg-[#E7000B] outline outline-[#FB2C36] text-white hover:bg-[#C10007]"
      >
        ★ CONFIRM PURCHASE ★
      </button>
    </div>
  );
}
