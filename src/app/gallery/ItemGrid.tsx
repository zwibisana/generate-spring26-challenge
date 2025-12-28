import { StolenItem } from "@/app/page";
import { ItemCard } from "./ItemCard";

interface ItemGridProps {
  items: StolenItem[];
  onSelect: (item: StolenItem) => void;
}

export function ItemGrid({ items, onSelect }: ItemGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map(item => (
        <ItemCard
          key={item.id}
          item={item}
          onClick={() => onSelect(item)}
        />
      ))}
    </div>
  );
}
