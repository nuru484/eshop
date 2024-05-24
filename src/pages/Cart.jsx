import NavBar from '../components/NavBar';
import Socials from '../components/Socials';
import Footer from '../components/Footer';

const Cart = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Socials />
      <NavBar />
      <main className="flex-1">
        <h1>Cart Page</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
