const truncateToTwoWords = (str) => {
  const words = str.split(/\s+/);
  return words.slice(0, 2).join(' ');
};

const ProductCard = ({ products }) => {
  return (
    <div className="grid grid-cols-4 gap-9 w-9/12 mx-auto my-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded shadow-md p-2 max-w-xl"
        >
          <div className="mb-4">
            <img
              src={product.image}
              alt={product.description}
              className="w-40 h-36 object-contain rounded-md mx-3"
            />
          </div>
          <div className="p-2 bg-slate-100">
            <h2 className="text-base text-globalColor5">
              {truncateToTwoWords(product.title)}
            </h2>
            <h2 className="text-xs text-globalColor5 font-bold py-3">
              ${product.price}
            </h2>
            <button className="bg-globalColor1 text-white text-xs w-full py-1 rounded-sm hover:bg-globalColor2">
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
