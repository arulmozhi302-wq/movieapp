function SearchBar({ query, setQuery, onSearch }) {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button
        onClick={onSearch}
        className="bg-blue-600 text-white px-4 rounded"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
