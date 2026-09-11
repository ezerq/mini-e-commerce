import SearchBar from "./SearchBar";

function Navbar({ setSearch }) {
  return (
    <nav className="w-full bg-bg/60 rounded-lg px-8 py-3 flex justify-between items-center">
      <h1 className="text-xl font-black cursor-pointer">MiniBuy</h1>

      <div className="flex items-center gap-2 text-lg">
        <SearchBar setSearch={setSearch} />

        <button className="mso icon-btn hover:bg-primary/10">favorite</button>
        <button className="mso icon-btn hover:bg-primary/10">
          shopping_cart
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
