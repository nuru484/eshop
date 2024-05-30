import NavBar from '../components/NavBar';
import Socials from '../components/Socials';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import useShopData from '../components/ShopData';
import CircularProgress from '@mui/material/CircularProgress';
import PageTitle from '../components/PageTitle';

const Shop = () => {
  const { products, loading, error } = useShopData({
    url: 'https://fakestoreapi.com/products',
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Socials />
      <NavBar />
      <main className="flex-1">
        <div className=" mx-auto">
          <PageTitle titleOfPage={'Shop'} />
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
