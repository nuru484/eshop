import NavBar from '../components/NavBar';
import Socials from '../components/Socials';
import Footer from '../components/Footer';
import ProductCategories from '../components/ProductCategories';
import Perks from '../utilities/Perks';
import HomeTitle from '../utilities/HomeTitle';
import WhyChooseUs from '../utilities/WhyChooseUs';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Socials />
      <NavBar />
      <main className="flex-1">
        <HomeTitle />
        <Perks />
        <ProductCategories />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
