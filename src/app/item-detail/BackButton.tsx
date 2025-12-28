interface BackButtonProps {
    onBack: () => void;
  }
  
  export function BackButton({ onBack }: BackButtonProps) {
    return (
      <div className="flex items-center inline-flex gap-x-1 p-3 text-[14px] text-[#9F9FA9] bg-[#18181B] outline outline-[#27272A] hover:text-white hover:outline-[#414146] duration-200">
        <span className="material-symbols-rounded !text-[16px]">west</span>
        <button onClick={onBack} className="uppercase">
          Back to Deals
        </button>
      </div>
    );
  }