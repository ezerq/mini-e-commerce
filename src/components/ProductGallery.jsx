function ProductGallery({ product }) {
  return (
    <div className="border border-primary/20 rounded-2xl">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="cursor-pointer w-full"
      />
    </div>
  );
}

export default ProductGallery;
