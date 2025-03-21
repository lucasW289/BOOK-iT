export type Props = {
  page: number;
  pages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ page, pages, onPageChange }: Props) => {
  const pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-6">
      <ul className="flex border rounded-lg border-slate-300">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`px-2 py-1 cursor-pointer ${
              page === number ? "bg-gray-200" : "hover:bg-gray-100"
            }`}
          >
            <button
              onClick={() => onPageChange(number)}
              className="w-full text-center"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
