import NavBar from '../components/NavBar';
import Socials from '../components/Socials';
import Footer from '../components/Footer';
import ProductsCarousel from '../components/ProductsCarousal';

import backgroundImage from '/src/assets/about-bg.jpg';
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
          <div>
            <h2>OUR STORY</h2>

            <div>
              <div>
                <h1>Since 1928</h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  libero massa, bibendum sit amet facilisis non, ullamcorper non
                  est. Suspendisse potenti. Integer a mi vel purus mollis
                  faucibus porttitor nec libero. Phasellus eget lacinia arcu.
                  Quisque ac enim accumsan, tristique tellus eu, accumsan erat.
                  Nam dictum ornare sagittis.
                </p>

                <p>
                  Ut faucibus sollicitudin est bibendum condimentum. Sed sit
                  amet urna nec diam iaculis pretium quis vel neque.
                  Pellentesque vitae mattis eros, a accumsan nibh. Sed gravida
                  quam ultricies purus dictum hendrerit. Curabitur et tincidunt
                  felis.
                </p>
              </div>

              <div>
                <img src={aboutPhoto1} alt="about photo" />

                <img src={aboutPhoto2} alt="different about photo" />
              </div>
            </div>
          </div>

          <div>
            <div>
              <div>
                <p>Since 1928</p>

                <p>
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

            <div>
              <div>
                <div>
                  <h2>Core Values</h2>

                  <p>
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
                  <h2>Our Community</h2>

                  <p>
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

        <div>
          <q>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </q>

          <p>Nurudeen Abdul-Majeed</p>

          <p>Developer</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
