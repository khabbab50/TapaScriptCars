const Search = () => {
  return (
    <div className="flex items-center gap-4 my-4">
      <input
        type="text"
        placeholder="Search Cars..."
        className="p-1 border rounded-md"
      />
      <span className="flex gap-2">
        <input type="checkbox" />
        <label>Whow Premlum Only</label>
      </span>
    </div>
  );
};

export default Search;
