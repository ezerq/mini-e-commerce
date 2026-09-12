import { toTitleCase, getDiscount } from "../utils/helper";

import RatingStars from "./RatingStars";
import DetailInfo from "./DetailInfo";
// import Accordion from "./Accordion";

function ProductInfo({ product }) {
  return (
    <div className="flex flex-col gap-2 cursor-default">
      <div className="flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
        <p className="flex-1">
          {product.brand !== undefined ? product.brand : "Good Store"}
        </p>
        <p className="text-primary/50 text-xs">{product.sku}</p>
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="ml-0.5 text-2xl font-semibold">{product.title}</h1>

        <div className="flex gap-1">
          {product.tags.map((t) => (
            <p className="text-xs border border-primary/10 text-primary/70 py-0.5 px-3.5 rounded-full">
              {toTitleCase(t)}
            </p>
          ))}
        </div>

        <div className="pt-1 flex items-center gap-1 ">
          <RatingStars rating={product.rating} />
          <p className="text-sm text-primary/70">{product.rating}</p>
        </div>

        <div className="ml-0.5 flex gap-2 items-center ">
          <h3 className="font-medium text-2xl">
            {getDiscount(product.price, product.discountPercentage)}
          </h3>

          <h3 className="text-primary/50 text-sm line-through">
            ${product.price}
          </h3>

          <h3 className="bg-red-400 text-bg lea px-1.5 py-0.5 text-xs rounded-md">
            Disc. {product.discountPercentage}%
          </h3>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end">
        <div className="flex flex-col gap-1">
          <DetailInfo
            icon="delivery_truck_speed"
            info={product.shippingInformation}
          />
          <DetailInfo icon="info" info={product.warrantyInformation} />
        </div>

        <div className="divider"></div>

        <div className="flex gap-1">
          <button className="flex flex-1 items-center justify-center gap-1 cursor-pointer hover:bg-blue-500/85 w-full bg-blue-500/70 py-2 rounded-lg text-bg text-sm">
            <span className="mso">shopping_cart</span>
            Add to Cart
          </button>

          <button className="mso p-2 border border-primary/20 rounded-lg hover:bg-primary/5 cursor-pointer">
            favorite
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
