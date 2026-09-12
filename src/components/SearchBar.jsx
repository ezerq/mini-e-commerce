function SearchBar({ search, setSearch }) {
  return (
    <div className="flex border border-primary/20 overflow-hidden items-center rounded-full">
      <div className="relative">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="text-sm min-w-50 px-3 placeholder:text-primary/50 outline-none"
          placeholder="Search products..."
        />
        <button
          onClick={() => setSearch("")}
          className={`${search === "" ? "opacity-0 pointer-events-none" : ""} absolute right-0.5 top-1/2 -translate-y-1/2 mso p-1 mr-1 rounded-full cursor-pointer hover:bg-primary/10`}
        >
          close
        </button>
      </div>

      <button className="mso border-l py-2 cursor-pointer hover:bg-primary/10 border-primary/20 px-2">
        search
      </button>
    </div>
  );
}

export default SearchBar;
