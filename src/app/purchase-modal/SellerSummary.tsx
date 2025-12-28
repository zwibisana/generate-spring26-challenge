interface SellerSummaryProps {
  username: string;
}

export function SellerSummary({ username }: SellerSummaryProps) {
  return (
    <div className="bg-[#09090B] p-3 outline outline-[#27272A]">
      <p className="text-[12px] text-[#52525C] uppercase">SELLER:</p>
      <p className="text-[14px]">{username}</p>
      <p className="text-[12px] text-[#F0B100]">⭐⭐⭐⭐⭐ VERIFIED</p>
    </div>
  );
}
