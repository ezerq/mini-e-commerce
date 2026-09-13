import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";

function Navbar({ search, setSearch }) {
  return (
    <nav className="sticky top-0 z-100 w-full border-b bg-slate-50 border-bg px-15 py-3 flex justify-between items-center">
      <Link to="/">
        <h1 className="text-xl font-black cursor-pointer">MiniBuy</h1>
      </Link>

      <SearchBar search={search} setSearch={setSearch} />

      <div className="flex items-center gap-2 text-lg">
        <button className="mso icon-btn">favorite</button>
        <button className="mso icon-btn">shopping_cart</button>
      </div>
    </nav>
  );
}

export default Navbar;
