const truncateToTwoWords = (str) => {
  const words = str.split(/\s+/);
  return words.slice(0, 2).join(' ');
};

const ProductCard = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-center items-center ">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col items-center bg-white rounded shadow-md p-2 m-4 max-w-xl"
        >
          <div className="mb-4">
            <img
              src={product.image}
              alt={product.description}
              className="w-36 h-36 object-contain rounded-md mx-3"
            />
          </div>
          <div className="bg-slate-100 w-full p-4 flex flex-col rounded">
            <h2 className=" text-base text-globalColor5">
              {truncateToTwoWords(product.title)}
            </h2>
            <h2 className="text-xs text-globalColor5 font-bold py-2">
              ${product.price}
            </h2>
            <button className="bg-globalColor1 text-white text-xs w-full py-1 rounded-sm mt-2 hover:bg-globalColor2 transition">
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
