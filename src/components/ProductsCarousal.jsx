import { useState } from 'react';
import useShopData from '../components/ShopData';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ProductsCarousel = () => {
  const { products, loading, error } = useShopData({
    url: 'https://fakestoreapi.com/products',
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItemsCount = 8;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(products.length - visibleItemsCount, 0)
        : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= products.length - visibleItemsCount ? 0 : prevIndex + 1
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex items-center">
      <div className="flex justify-center items-center w-full bg-white p-2">
        <ArrowBackIosIcon
          onClick={handlePrevClick}
          className="cursor-pointer m-2"
        />

        {products.length > 0 &&
          products
            .slice(currentIndex, currentIndex + visibleItemsCount)
            .map((product) => (
              <div key={product.id} className="flex-1 flex justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-40 h-40 object-contain"
                />
              </div>
            ))}

        <ArrowForwardIosIcon
          onClick={handleNextClick}
          className="cursor-pointer m-2"
        />
      </div>
    </div>
  );
};

export default ProductsCarousel;
