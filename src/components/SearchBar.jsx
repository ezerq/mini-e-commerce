function SearchBar({ setSearch }) {
  return (
    <div className="flex border border-primary/20 overflow-hidden items-center rounded-full">
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        className="text-sm min-w-50 px-3 placeholder:text-primary/50 outline-none"
        placeholder="Search products..."
      />

      <button className="mso border-l py-2 cursor-pointer hover:bg-primary/10 border-primary/20 px-2">
        search
      </button>
    </div>
  );
}

export default SearchBar;
