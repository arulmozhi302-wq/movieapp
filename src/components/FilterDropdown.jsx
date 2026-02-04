function FilterDropdown({ type, setType }) {
  return (
    <select
      value={type}
      onChange={(e) => setType(e.target.value)}
      className="border p-2 rounded"
    >
      <option value="">All</option>
      <option value="movie">Movie</option>
      <option value="series">Series</option>
      <option value="episode">Episode</option>
    </select>
  );
}

export default FilterDropdown;
