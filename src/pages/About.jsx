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
          className=""
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="p-20 pb-4 bg-blue-500 bg-opacity-60">
            <p className="text-white text-5xl w-2/5 leading-snug pt-8 pl-8">
              Shopping is fulfilling desires.
            </p>
          </div>
        </div>
        <h1>About Page</h1>
      </main>
      <Footer />
    </div>
  );
};

export default About;
