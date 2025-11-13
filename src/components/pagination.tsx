// components/pagination.tsx
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  delta?: number; // how many pages around current to show
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  delta = 2,
}: PaginationProps) {
  const getPages = () => {
    const pages: (number | '...')[] = [];
    let l: number | null = null;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        if (l && i - l > 1) {
          pages.push('...');
        }
        pages.push(i);
        l = i;
      }
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        className="px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-100"
      >
        Prev
      </button>

      {getPages().map((p, idx) =>
        p === '...' ? (
          <span key={idx} className="px-3 py-1">
            ...
          </span>
        ) : (
          <button
            key={idx}
            onClick={() => onPageChange(Number(p))}
            className={`px-3 py-1 rounded-lg border border-gray-300 ${
              currentPage === p ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'
            }`}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        className="px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-100"
      >
        Next
      </button>
    </div>
  );
}
