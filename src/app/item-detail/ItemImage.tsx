interface ItemImageProps {
  imageUrl: string;
  name: string;
}

export function ItemImage({ imageUrl, name }: ItemImageProps) {
  return (
    <div className="relative w-full">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-auto object-cover outline outline-[1px] outline-[#27272A]"
      />

      <div className="absolute top-2 right-2 flex h-[26px] px-2 text-[12px] items-center text-[#00C950] bg-[#262729] outline outline-[1px] outline-[#27272A]">
        <span className="material-symbols-rounded !text-[24px]">
          check_small
        </span>
        VERIFIED
      </div>
    </div>
  );
}
