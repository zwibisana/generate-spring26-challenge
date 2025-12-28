interface QuantityProps {
  quantity: number;
  stock: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function Quantity({
  quantity,
  stock,
  onIncrease,
  onDecrease,
}: QuantityProps) {
  return (
    <div className="bg-[#09090B] p-3 outline outline-[#27272A]">
      <p className="text-[12px] text-[#52525C] uppercase mb-2">QUANTITY:</p>

      <div className="flex items-center gap-x-4">
        <button
          onClick={onDecrease}
          disabled={quantity <= 1}
          className="w-[42px] h-[42px] bg-[#272729] outline outline-[#3F3F46] duration-200 disabled:cursor-not-allowed hover:bg-[#3F3F46]"
        >
          −
        </button>

        <span className="w-[42px] h-[42px] flex items-center justify-center bg-black outline outline-[#27272A]">
          {quantity}
        </span>

        <button
          onClick={onIncrease}
          disabled={quantity >= stock}
          className="w-[42px] h-[42px] bg-[#272729] outline outline-[#3F3F46] duration-200 disabled:cursor-not-allowed hover:bg-[#3F3F46]"
        >
          +
        </button>

        <p className="text-[#71717B]">/ {stock}</p>
      </div>
    </div>
  );
}
