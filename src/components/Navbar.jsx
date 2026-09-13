import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import NavbarUpper from "./NavbarUpper";
// import FilterBar from "./FilterBar";

function Navbar({
  // products,
  // setProducts,
  //
  search,
  setSearch,
  //
  // category,
  // setCategory,
  // //
  // sortPrice,
  // setSortPrice,
}) {
  return (
    <div>
      <NavbarUpper />

      <nav className="w-full border-b border-bg px-15 py-3 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-xl font-black cursor-pointer">MiniBuy</h1>
        </Link>

        <SearchBar search={search} setSearch={setSearch} />

        <div className="flex items-center gap-2 text-lg">
          <button className="mso icon-btn">favorite</button>
          <button className="mso icon-btn">shopping_cart</button>
        </div>
      </nav>

      {/* <FilterBar
        products={products}
        setProducts={setProducts}
        //
        category={category}
        onCategoryChange={setCategory}
        //
        sortPrice={sortPrice}
        setSortPrice={setSortPrice}
      /> */}
    </div>
  );
}

export default Navbar;
