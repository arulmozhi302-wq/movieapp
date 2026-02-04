function Pagination({ page, setPage, totalResults }) {
  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="flex justify-center gap-4 mt-8">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="px-4 py-2 bg-gray-300 rounded"
      >
        Prev
      </button>

      <span className="py-2">{page} / {totalPages}</span>

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="px-4 py-2 bg-gray-300 rounded"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
