import NavBar from '../components/NavBar';
import Socials from '../components/Socials';
import Footer from '../components/Footer';
import ProductCategories from '../components/ProductCategories';
import Perks from '../utilities/Perks';
import HomeTitle from '../utilities/HomeTitle';
import WhyChooseUs from '../utilities/WhyChooseUs';
import useShopData from '../components/ShopData';
import ProductCard from '../components/ProductCard';
import Discount from '../utilities/Discount';

import CircularProgress from '@mui/material/CircularProgress';

const Home = () => {
  const { products, loading, error } = useShopData({
    url: 'https://fakestoreapi.com/products?limit=8',
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Socials />
      <NavBar />

      <main className="flex-1">
        <HomeTitle />
        <Perks />
        <ProductCategories />
        <WhyChooseUs />

        <div className="flex flex-col justify-center items-center gap-6 w-2/4 mx-auto my-10">
          <p className="text-xs font-bold text-globalColor1 p-2">
            TOP SALE ON THIS WEEK
          </p>
          <h2 className="text-5xl font-normal">Featured Products</h2>
          <p className="text-sm text-globalColor5 leading-relaxed text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {loading && (
          <div className="flex justify-center items-center h-40">
            <CircularProgress color="primary" />
          </div>
        )}
        {error && <div className="text-center text-red-500">{error}</div>}
        {!loading && !error && <ProductCard products={products} />}

        <div className="flex justify-center my-10">
          <button className="bg-globalColor1 px-4 py-4 rounded shadow-md text-white text-xs hover:bg-globalColor2 transition-colors duration-100 delay-200">
            View All Products
          </button>
        </div>

        <Discount />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
