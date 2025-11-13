// components/Pagination2.tsx
'use client';

interface Pagination2Props {
  page: number; // current page
  totalPages: number;
  setPage: (p: number) => void;
}

export default function Pagination2({ page, totalPages, setPage }: Pagination2Props) {
  const handlePrev = () => setPage(Math.max(page - 1, 1));
  const handleNext = () => setPage(Math.min(page + 1, totalPages));

  return (
    <div className="flex justify-center items-center gap-2 mt-3 flex-wrap">
      <button
        onClick={handlePrev}
        disabled={page === 1}
        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105"
      >
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1)
        .filter((p) => {
          return (
            p === 1 ||
            p === 2 ||
            p === totalPages ||
            p === totalPages - 1 ||
            (p >= page - 1 && p <= page + 1)
          );
        })
        .map((p, idx, arr) => {
          const prev = arr[idx - 1];
          const showDots = prev && p - prev > 1;
          return (
            <span key={p} className="flex items-center">
              {showDots && <span className="px-2 text-gray-400">...</span>}
              <button
                onClick={() => setPage(p)}
                className={`px-3 py-1 rounded-md transition-all ${
                  p === page
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {p}
              </button>
            </span>
          );
        })}

      <button
        onClick={handleNext}
        disabled={page === totalPages}
        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105"
      >
        Next
      </button>
    </div>
  );
}
