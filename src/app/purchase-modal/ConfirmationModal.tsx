/*
 * ConfirmationModal
 *
 * Displays a card of detailed information about user's purchase
 * including their item, quantity, total, and order number.
 * 
 * What it does:
 * - Render item metadata from stolenItems.json (item name)
 * - Allow user to return back to gallery
 */

interface ConfirmationModalProps {
  order_number: string;
  item_name: string;
  quantity: number;
  total: number;
  countdown: number;
  onReturn: () => void;
}

export function ConfirmationModal({
  order_number,
  item_name,
  quantity,
  total,
  countdown,
  onReturn,
}: ConfirmationModalProps) {
  return (
    <div className="bg-[#18181B] p-8 w-[448px] text-center outline outline-[#27272A] flex flex-col gap-y-4">
      <span className="material-symbols-rounded !text-[64px] text-[#00C950]">
        task_alt
      </span>

      <div>
        <h2 className="uppercase text-[16px]">Transaction Confirmed</h2>
        <p className="text-[#71717B] text-[12px]">Order #{order_number}</p>
      </div>

      <div className="flex flex-col gap-y-4 bg-[#09090B] border-solid outline outline-[#27272A] p-4">
        <div className="flex flex-row justify-between items-center">
          <p className="text-[12px] text-[#71717B]">Item:</p>
          <div className="text-[12px]">{item_name}</div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p className="text-[12px] text-[#71717B]">Quantity:</p>
          <div className="text-[12px]">{quantity}</div>
        </div>
        <div className="flex flex-row justify-between items-center pt-4 border-t border-solid border-t-[#27272A]">
          <p className="text-[12px] text-[#9F9FA9]">TOTAL:</p>
          <div className="text-[18px] font-bold text-[#FF6467]">
            ${total.toLocaleString()}
          </div>
        </div>
      </div>

      <div className="items-center flex flex-row gap-x-2 w-full justify-center">
        <span className="material-symbols-rounded !text-[12px] text-[#71717B]">
          timer
        </span>
        <p className="text-[#71717B] text-center text-[12px]">
          Returning in {countdown}s
        </p>
      </div>

      <button
        onClick={onReturn}
        className="text-[12px] uppercase py-2 bg-[#272729] outline outline-[#3F3F46] text-[#9F9FA9] hover:bg-[#3F3F46]"
      >
        Return Now
      </button>
    </div>
  );
}
