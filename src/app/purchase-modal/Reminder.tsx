export default function Reminder() {
  return (
    <div>
      <div className="flex flex-row gap-x-2 px-4 py-3 border-solid outline outline-[#82181A]">
        <span className="material-symbols-rounded !text-[20px] text-[#FF6467]">
          skull
        </span>
        <p className="text-[12px] font-bold">
          ALL SALES FINAL! NO REFUNDS! NO TRACKING! CRYPTO ONLY!
        </p>
      </div>

      <p className="text-[12px] mt-3 text-[#3F3F46] text-center">
        By clicking confirm you agree to all terms
      </p>
    </div>
  );
}
