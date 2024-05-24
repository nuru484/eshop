// Home.jsx
import NavBar from '../components/NavBar';
import Socials from '../components/Socials';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import useShopData from '../components/ShopData';

const Home = () => {
  const { products, loading, error } = useShopData();

  return (
    <div className="flex flex-col min-h-screen">
      <Socials />
      <NavBar />
      <main className="flex-1">
        <h1>Homepage</h1>
        <ProductCard products={products} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
