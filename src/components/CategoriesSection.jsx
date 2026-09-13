import SectionHome from "./SectionHome";

import { useMemo } from "react";
import { toTitleCase } from "../utils/helper";

function CategoriesSection({ products }) {
  //
  const categories = useMemo(() => {
    return [...new Set(products.map((p) => p.category))];
  }, [products]);

  return (
    <SectionHome title={"Shop by Categories"} btnText={"Categories"}>
      {categories.map((cat) => (
        <div key={cat} className="card-color px-4 py-2">
          <p className="font-medium text-lg">{toTitleCase(cat)}</p>
          <button className="w-full cursor-pointer text-xs opacity-50 flex items-center justify-between">
            Shop Now
            <span className="mso">arrow_forward</span>
          </button>
        </div>
      ))}
    </SectionHome>
  );
}

export default CategoriesSection;
