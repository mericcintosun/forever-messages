const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex items-center bg-white shadow-md rounded-xl px-4 py-2 w-full max-w-sm mx-auto mb-8">
      <span className="mr-2 text-lg">🔍</span>
      <input
        type="text"
        placeholder="Search by names..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-1 bg-transparent outline-none text-sm text-gray-700"
      />
    </div>
  );
};

export default SearchBar;
