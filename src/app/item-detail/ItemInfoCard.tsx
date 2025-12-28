interface ItemInfoCardProps {
  price: number;
  seller: string;
  stock: number;
  city: string;
  country: string;
}

export function ItemInfoCard({
  price,
  seller,
  stock,
  city,
  country,
}: ItemInfoCardProps) {
  return (
    <div className="relative bg-[#18181B] p-6 border-solid outline outline-[#27272A] flex flex-col gap-y-4">
      <div className="absolute top-[-5px] right-[-4px] rotate-[.08rad]">
        <div className="px-4 py-1.5 text-[12px] font-bold bg-[#e60010] flex items-center justify-center border-solid outline outline-[#FB2C36]">
          BUY NOW!
        </div>
      </div>

      <div className="flex flex-row items-center justify-between pb-6 border-b border-solid border-b-[#27272A]">
        <p className="text-[14px] text-[#71717B]">PRICE:</p>
        <div>
          <p className="text-left text-[30px] font-bold text-[#FF6467]">
            ${price.toLocaleString()}
          </p>
          <p className="text-[12px] text-[#52525C] text-right">
            LOWEST ON MARKET
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-x-4 items-center bg-[#09090B] p-3 border-solid outline outline-[#27272A]">
        <div>
          <span className="material-symbols-rounded !text-[20px] text-[#52525C]">
            person
          </span>
        </div>
        <div>
          <p className="text-[12px] text-[#52525C] uppercase">SELLER:</p>
          <p className="text-[14px]">{seller}</p>
          <p className="text-[12px] text-[#F0B100]">⭐⭐⭐⭐⭐ 100% POSITIVE</p>
        </div>
      </div>

      <div className="flex flex-row gap-x-4 items-center bg-[#09090B] p-3 border-solid outline outline-[#27272A]">
        <div>
          <span className="material-symbols-rounded !text-[20px] text-[#52525C]">
            location_on
          </span>
        </div>
        <div>
          <p className="text-[12px] text-[#52525C] uppercase">SHIPS FROM:</p>
          <p className="text-[14px]">
            {city}, {country}
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-x-4 items-center bg-[#09090B] p-3 border-solid outline outline-[#27272A]">
        <div>
          <span className="material-symbols-rounded !text-[20px] text-[#52525C]">
            location_on
          </span>
        </div>
        <div>
          <p className="text-[12px] text-[#52525C] uppercase">IN STOCK:</p>
          <p className="text-[18px] font-bold text-[#FF6467]">
            ONLY {stock} LEFT
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col text-[12px] w-full sm:w-auto sm:flex-1 px-6 text-center text-[#71717B] bg-[#09090B] p-3 border-solid outline outline-[#27272A]">
          <span className="material-symbols-rounded !text-[24px] text-[#71717B]">
            shield
          </span>
          SECURE
        </div>
        <div className="flex flex-col text-[12px] w-full sm:w-auto sm:flex-1 px-6 text-center text-[#71717B] bg-[#09090B] p-3 border-solid outline outline-[#27272A]">
          <span className="material-symbols-rounded !text-[24px] text-[#71717B]">
            bolt
          </span>
          INSTANT
        </div>
        <div className="flex flex-col text-[12px] w-full sm:w-auto sm:flex-1 px-6 text-center text-[#71717B] bg-[#09090B] p-3 border-solid outline outline-[#27272A]">
          <span
            className="material-symbols-rounded !text-[24px] text-[#F0B100]"
            style={{
              fontVariationSettings:
                "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
            }}
          >
            star
          </span>
          RATED
        </div>
      </div>
    </div>
  );
}
