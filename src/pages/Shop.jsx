import NavBar from '../components/NavBar';
import Socials from '../components/Socials';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import useShopData from '../components/ShopData';
import CircularProgress from '@mui/material/CircularProgress';
import backgroundImage from '/src/assets/bg_03.jpg'; // Import your background image

const Shop = () => {
  const { products, loading, error } = useShopData({
    url: 'https://fakestoreapi.com/products',
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Socials />
      <NavBar />
      <main className="flex-1">
        <div className="container mx-auto">
          <h1
            className="text-5xl font-extrabold  p-16 text-center text-globalColor5 "
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            Shop
          </h1>
          {loading && (
            <div className="flex justify-center items-center h-40">
              <CircularProgress color="primary" />
            </div>
          )}
          {error && <div className="text-center text-red-500">{error}</div>}
          {!loading && !error && <ProductCard products={products} />}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
