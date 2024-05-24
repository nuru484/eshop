// Home.jsx
import NavBar from '../components/NavBar';
import Socials from '../components/Socials';
import Footer from '../components/Footer';
import ProductCategories from '../components/ProductCategories';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Socials />
      <NavBar />
      <main className="flex-1">
        <ProductCategories />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
