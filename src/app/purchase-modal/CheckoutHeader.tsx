interface CheckoutHeaderProps {
  onClose: () => void;
}

export function CheckoutHeader({ onClose }: CheckoutHeaderProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-x-2 items-center">
        <span className="material-symbols-rounded !text-[24px] text-[#FF6467]">
          warning
        </span>
        <p className="text-[18px] font-bold text-[#FF6467]">CHECKOUT</p>
      </div>

      <button
        onClick={onClose}
        className="group w-[42px] h-[42px] flex items-center justify-center bg-[#272729] outline outline-[#3F3F46] duration-200 hover:outline-gray-500"
      >
        <span className="material-symbols-rounded !text-[22px] text-[#71717B] group-hover:text-white duration-200">
          close
        </span>
      </button>
    </div>
  );
}
