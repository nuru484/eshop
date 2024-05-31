import NavBar from '../components/NavBar';
import Socials from '../components/Socials';
import Footer from '../components/Footer';

import backgroundImage from '/src/assets/about-bg.jpg';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Socials />
      <NavBar />
      <main className="flex-1">
        <div
          className="p-20 pb-4"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <p className="text-white"> Shopping is fulfilling desires.</p>
        </div>
        <h1>About Page</h1>
      </main>
      <Footer />
    </div>
  );
};

export default About;
