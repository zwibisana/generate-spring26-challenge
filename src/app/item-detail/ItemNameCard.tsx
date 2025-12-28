interface ItemNameCardProps {
    name: string;
    description: string;
  }

export function ItemNameCard({
    name,
    description,
  }: ItemNameCardProps) {
  return (
    <div className="flex flex-col gap-y-3 p-6 bg-[#18181B] border-solid outline outline-[#27272A]">
      <h1 className="uppercase text-[24px] font-bold">{name}</h1>
      <div className="flex-row flex gap-x-3">
        <div className="flex inline-flex text-center items-center px-2 h-[22px] text-[#FF6467] bg-[#460809] outline border-solid outline-[#82181A]">
          <p className="text-[12px]">HOT</p>
        </div>
        <div className="flex inline-flex text-center items-center px-2 h-[22px] text-[#00C950] bg-[#27272A] outline border-solid outline-[#3F3F46]">
          <p className="text-[12px]">VERIFIED</p>
        </div>
        <div className="flex inline-flex text-center items-center px-2 h-[22px] text-[#9F9FA9] bg-[#27272A] outline border-solid outline-[#3F3F46]">
          <p className="text-[12px]">TRUSTED</p>
        </div>
      </div>
      <p className="text-[14px] text-[#9F9FA9]">{description}</p>
    </div>
  );
}
