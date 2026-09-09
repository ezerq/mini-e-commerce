function SearchBar() {
  return (
    <div className="flex border border-primary/20 overflow-hidden items-center rounded-full">
      <p className="text-sm min-w-50 px-3 text-primary/50">
        Search Products...
      </p>
      <button className="mso border-l py-2 cursor-pointer hover:bg-primary/10 border-primary/20 px-2">
        search
      </button>
    </div>
  );
}

export default SearchBar;
