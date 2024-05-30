import NavBar from '../components/NavBar';
import Socials from '../components/Socials';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';

const MyAccount = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Socials />
      <NavBar />
      <PageTitle titleOfPage={'My Account'} />
      <main className="flex-1">
        <h1>My Account Page</h1>
      </main>
      <Footer />
    </div>
  );
};

export default MyAccount;
