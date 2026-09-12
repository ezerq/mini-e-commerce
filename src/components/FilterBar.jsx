import { useMemo, useState } from "react";
import { toTitleCase } from "../utils/helper";

function FilterBar({
  products,
  category,
  onCategoryChange,
  sortPrice,
  setSortPrice,
}) {
  //
  const categories = useMemo(() => {
    return ["all", ...new Set(products.map((p) => p.category))];
  }, [products]);

  const [isCategoryBar, setIsCategoryBar] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 justify-between">
        <div className="flex gap-2">
          <button
            className={`${isCategoryBar ? "active" : ""} mso text-base rounded-lg btn-category`}
            onClick={() => setIsCategoryBar(!isCategoryBar)}
          >
            category_search
          </button>
          {categories
            .filter((c) => c !== "all" && c === category)
            .map((c) => (
              <button
                key={c}
                className="btn-category active"
                onClick={() => onCategoryChange("all")}
              >
                {toTitleCase(c)} <span className="mso text-xs">close</span>
              </button>
            ))}
        </div>

        <div className="bg-bg/60 text-sm rounded-lg overflow-hidden flex text-primary/50">
          <button
            onClick={() => setSortPrice("expensive")}
            className={`${sortPrice === "expensive" ? "active" : ""} filter-btn`}
          >
            <span className="mso text-base">filter_alt</span>Expensive
          </button>
          <button
            onClick={() => setSortPrice("cheap")}
            className={`${sortPrice === "cheap" ? "active" : ""} filter-btn`}
          >
            <span className="mso text-base">filter_alt</span>Cheap
          </button>
          <button
            onClick={() => setSortPrice(null)}
            className="filter-btn mso text-base"
          >
            filter_alt_off
          </button>
        </div>
      </div>

      <div
        className={`${isCategoryBar ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} grid transition-grid-rows`}
      >
        <div className="overflow-hidden">
          <div className="p-3 min-h-0 w-full bg-bg/40 rounded-lg flex gap-1">
            {categories.map((c) => (
              <button
                className={`btn-category h-fit ${c === category ? "active" : ""}`}
                onClick={() => onCategoryChange(`${c}`)}
              >
                {" "}
                <span className={` ${c === category ? "mso" : "hidden"} `}>
                  check
                </span>
                {toTitleCase(c)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
