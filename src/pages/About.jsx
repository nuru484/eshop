import NavBar from '../components/NavBar';
import Socials from '../components/Socials';
import Footer from '../components/Footer';
import ProductsCarousel from '../components/ProductsCarousal';

import backgroundImage from '/src/assets/about-bg.jpg';
import paragraphBackground from '/src/assets/bg_03.jpg';
import aboutPhoto1 from '/src/assets/library-of-congress-lw6pO_m2Ve4-unsplash.jpg';
import aboutPhoto2 from '/src/assets/austrian-national-library-DSrf3mapye4-unsplash.jpg';

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

        <div>
          <div
            className="w-9/12 mx-auto pt-14 "
            style={{ borderBottom: '2px solid #F2EEE2' }}
          >
            <h2 className="text-globalColor1 text-sm font-bold py-4">
              OUR STORY
            </h2>

            <div className="grid grid-cols-2 gap-20 mb-14">
              <div>
                <h1 className="text-5xl py-4">Since 1928</h1>

                <p className="text-sm leading-loose py-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  libero massa, bibendum sit amet facilisis non, ullamcorper non
                  est. Suspendisse potenti. Integer a mi vel purus mollis
                  faucibus porttitor nec libero. Phasellus eget lacinia arcu.
                  Quisque ac enim accumsan, tristique tellus eu, accumsan erat.
                  Nam dictum ornare sagittis.
                </p>

                <p className="text-sm leading-loose py-4">
                  Ut faucibus sollicitudin est bibendum condimentum. Sed sit
                  amet urna nec diam iaculis pretium quis vel neque.
                  Pellentesque vitae mattis eros, a accumsan nibh. Sed gravida
                  quam ultricies purus dictum hendrerit. Curabitur et tincidunt
                  felis.
                </p>
              </div>

              <div className="relative mt-10 box-border mr-5">
                <img src={aboutPhoto1} alt="about photo" className="w-9/12" />

                <img
                  src={aboutPhoto2}
                  alt="different about photo"
                  className="absolute w-3/5 bottom-2/3 left-2/4"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="w-9/12 mx-auto">
              <div className="grid grid-cols-2 gap-20 py-10">
                <h1 className="text-5xl py-4">Since 1928</h1>

                <p className="text-sm leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  libero massa, bibendum sit amet facilisis non, ullamcorper non
                  est. Suspendisse potenti. Integer a mi vel purus mollis
                  faucibus porttitor nec libero. Phasellus eget lacinia arcu.
                </p>
              </div>
            </div>

            <div>
              <ProductsCarousel />
            </div>

            <div className="w-9/12 mx-auto py-10">
              <div className="grid grid-cols-2 gap-20 ">
                <div>
                  <h2 className="text-xl font-bold py-4">Core Values</h2>

                  <p className="text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi libero massa, bibendum sit amet facilisis non,
                    ullamcorper non est. Suspendisse potenti. Integer a mi vel
                    purus mollis faucibus porttitor nec libero. Phasellus eget
                    lacinia arcu. Quisque ac enim accumsan, tristique tellus eu,
                    accumsan erat. Nam dictum ornare sagittis. Ut faucibus
                    sollicitudin est bibendum condimentum. Sed sit amet urna nec
                    diam iaculis pretium quis vel neque. Pellentesque vitae
                    mattis eros, a accumsan nibh. Sed gravida quam ultricies
                    purus dictum hendrerit. Curabitur et tincidunt felis.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold py-4">Our Community</h2>

                  <p className="text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi libero massa, bibendum sit amet facilisis non,
                    ullamcorper non est. Suspendisse potenti. Integer a mi vel
                    purus mollis faucibus porttitor nec libero. Phasellus eget
                    lacinia arcu. Quisque ac enim accumsan, tristique tellus eu,
                    accumsan erat. Nam dictum ornare sagittis. Ut faucibus
                    sollicitudin est bibendum condimentum. Sed sit amet urna nec
                    diam iaculis pretium quis vel neque. Pellentesque vitae
                    mattis eros, a accumsan nibh. Sed gravida quam ultricies
                    purus dictum hendrerit. Curabitur et tincidunt felis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="py-10 text-center w-full"
          style={{
            backgroundImage: `url(${paragraphBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <p className="text-2xl w-2/5 mx-auto leading-normal py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <p className="py-3">Nurudeen Abdul-Majeed</p>

          <p className="text-globalColor5"> Developer</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
