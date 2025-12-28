interface LocationSummaryProps {
  city: string;
  country: string;
}

export function LocationSummary({ city, country }: LocationSummaryProps) {
  return (
    <div className="bg-[#09090B] p-3 outline outline-[#27272A]">
      <p className="text-[12px] text-[#52525C] uppercase">SHIPPING FROM:</p>
      <p className="text-[14px]">
        {city}, {country}
      </p>
    </div>
  );
}
