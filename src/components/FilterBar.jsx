import { toTitleCase } from "../utils/helper";

function FilterBar({ products, category, setCategory, setSortPrice }) {
  //
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 justify-between">
        <div className="flex gap-2"></div>

        <div className="bg-bg/60 text-sm rounded-lg overflow-hidden flex text-primary/50">
          <button
            onClick={() => setSortPrice("expensive")}
            className="filter-icon"
          >
            <span className="mso text-base">filter_alt</span>Expensive
          </button>
          <button onClick={() => setSortPrice("cheap")} className="filter-icon">
            <span className="mso text-base">filter_alt</span>Cheap
          </button>
          <button
            onClick={() => setSortPrice("")}
            className="filter-icon mso text-base"
          >
            filter_alt_off
          </button>
        </div>
      </div>

      <div className="w-full bg-bg/40 rounded-lg p-3 flex gap-1">
        {categories.map((c) => (
          <button
            className={`btn-category h-fit ${c === category ? "active" : ""}`}
            onClick={() => setCategory(`${c}`)}
          >
            {toTitleCase(c)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
