interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPrev,
  onNext,
  onSelect,
}: PaginationProps) {
  return (
    <div className="flex justify-center align-center gap-[6px] p-[20px]">
      <div
        className={`flex items-center gap-1 py-2 px-5 ${
          currentPage === 1
            ? "bg-[#121214] text-[#272729] cursor-not-allowed"
            : "bg-[#27272A] border-solid outline outline-[#3F3F46] duration-200 hover:bg-[#3F3F46] cursor-pointer"
        }
       `}
      >
        <span className="material-symbols-rounded !text-[16px]">
          chevron_left
        </span>
        <button
          disabled={currentPage === 1}
          onClick={onPrev}
          className="text-[12px]"
        >
          PREVIOUS
        </button>
      </div>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onSelect(page)}
          className={`py-2 px-4 cursor-pointer text-[12px]
              ${
                currentPage === page
                  ? "bg-[#155DFC] border-solid outline outline-[#2B7FFF] text-white font-bold"
                  : "bg-[#27272A] border-solid outline outline-[#3F3F46] duration-200 hover:bg-[#3F3F46] cursor-pointer"
              }
          `}
        >
          {page}
        </button>
      ))}

      <div
        className={`flex items-center gap-1 py-2 px-5 ${
          currentPage === totalPages
            ? "bg-[#121214] text-[#272729] cursor-not-allowed"
            : "bg-[#27272A] border-solid outline outline-[#3F3F46] duration-200 hover:bg-[#3F3F46] cursor-pointer"
        }
              `}
      >
        <button
          disabled={currentPage === totalPages}
          onClick={onNext}
          className="text-[12px]"
        >
          NEXT
        </button>
        <span className="material-symbols-rounded !text-[16px]">
          chevron_right
        </span>
      </div>
    </div>
  );
}
