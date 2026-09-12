import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

function Navbar({
  products,
  setProducts,
  //
  search,
  setSearch,
  //
  category,
  setCategory,
  //
  sortPrice,
  setSortPrice,
}) {
  return (
    <div className="flex flex-col gap-2">
      <nav className="w-full bg-bg/60 rounded-lg px-8 py-3 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-xl font-black cursor-pointer">MiniBuy</h1>
        </Link>

        <div className="flex items-center gap-2 text-lg">
          <SearchBar search={search} setSearch={setSearch} />

          <button className="mso icon-btn">favorite</button>
          <button className="mso icon-btn">shopping_cart</button>
        </div>
      </nav>

      <FilterBar
        products={products}
        setProducts={setProducts}
        //
        category={category}
        onCategoryChange={setCategory}
        //
        sortPrice={sortPrice}
        setSortPrice={setSortPrice}
      />
    </div>
  );
}

export default Navbar;
