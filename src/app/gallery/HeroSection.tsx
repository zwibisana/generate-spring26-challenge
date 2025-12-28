export default function HeroSection() {
  return (
    <div className="relative header bg-[#18181B] border border-[#27272A] p-8 rounded-[2px]">
      <h1 className="text-left text-[48px] font-bold uppercase tracking-[2.4] leading-[1]">
        The Dark Vault
      </h1>
      <h3 className="text-left text-[14px] text-[#71717B] tracking-[1.4] mt-4">
        STOLEN GOODS • NO QUESTIONS ASKED • CRYPTO ONLY
      </h3>
      <div className="flex flex-wrap gap-3 mt-6">
        <div className="flex items-center gap-1 px-2 py-1 text-[12px] text-[#9F9FA9] bg-[#27272A] outline-[#3F3F46] border-solid outline">
          <span className="material-symbols-rounded !text-[16px]">shield</span>
          SECURE
        </div>
        <div className="flex items-center gap-1 px-2 py-1 text-[12px] text-[#9F9FA9] bg-[#27272A] outline-[#3F3F46] border-solid outline">
          <span className="material-symbols-rounded !text-[16px]">bolt</span>
          INSTANT
        </div>
        <div className="flex items-center gap-1 px-2 py-1 text-[12px] text-[#00C950] bg-[#27272A] outline-[#3F3F46] border-solid outline">
          <span className="material-symbols-rounded !text-[16px]">
            visibility
          </span>
          3,847 ONLINE
        </div>
      </div>

      <div className="absolute top-[-4px] right-[-4px] rotate-[.08rad]">
        <div className="px-4 py-1.5 text-[12px] font-bold bg-[#e60010] flex items-center justify-center border-solid outline outline-[#FB2C36]">
          HOT DEALS
        </div>
      </div>
    </div>
  );
}
