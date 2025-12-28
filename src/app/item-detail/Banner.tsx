interface BannerProps {
    stock: number;
  }
  
export function Banner({ stock }: BannerProps) {
    return (
      <div className="text-center text-[#71717B] bg-[#18181a] py-[6px] text-[12px] tracking-[0.3] font-medium outline outline-[#27272A]">
        ★ LIMITED TIME OFFER ★ ACT FAST ★ ONLY {stock} LEFT ★
      </div>
    );
}


