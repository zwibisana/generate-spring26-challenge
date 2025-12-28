interface ItemSummaryProps {
  name: string;
}

export function ItemSummary({ name }: ItemSummaryProps) {
  return (
    <div className="bg-[#09090B] p-3 outline outline-[#27272A]">
      <p className="text-[12px] text-[#52525C] uppercase">ITEM:</p>
      <p className="text-[14px]">{name}</p>
    </div>
  );
}
