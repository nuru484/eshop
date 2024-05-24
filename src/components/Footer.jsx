import cards from '/src/assets/cards.png';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer className=" bg-globalColor4 text-white font-sans text-xs px-40">
      <div className="flex pt-16 pb-12">
        <section className="flex-1 pr-4">
          <h2 className="font-bold">ABOUT US</h2>
          <p className="leading-loose py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <img src={cards} alt="atm cards icon" />
        </section>
        <section className="flex-1 pr-4">
          <h1 className="font-bold">QUICK LINKS</h1>
          <ul className="leading-loose py-4 hover:cursor-pointer">
            <li>T-Shirts</li>
            <li>Mugs</li>
            <li>Hats</li>
            <li>Badges</li>
            <li>Hoodies</li>
            <li>Phone Cases</li>
          </ul>
        </section>
        <section className="flex-1 pr-4">
          <h1 className="font-bold">DISCOVER</h1>
          <ul className="leading-loose py-4 hover:cursor-pointer">
            <li>Buy a Gift Card</li>
            <li>Wishlist</li>
            <li>Check Your Balance</li>
            <li>Account Sign In</li>
            <li>Promotions & Discounts</li>
            <li>Site Map</li>
          </ul>
        </section>
        <section className="flex-1 pr-4">
          <h1 className="font-bold">HELP</h1>
          <ul className="leading-loose py-4 hover:cursor-pointer">
            <li>Returns & Exchanges</li>
            <li>Customer Service</li>
            <li>Order Status</li>
            <li>Track My Package</li>
            <li>Shipping</li>
            <li>FAQ</li>
          </ul>
        </section>
        <section className="flex-1">
          <h1 className="font-bold">GET IN TOUCH</h1>
          <ul className="flex gap-2 leading-loose py-4 ">
            <li>
              <FacebookIcon className="text-2xl hover:text-globalColor1 hover:cursor-pointer" />
            </li>
            <li>
              <XIcon className="text-2xl hover:text-globalColor1 hover:cursor-pointer" />
            </li>
            <li>
              <YouTubeIcon className="text-2xl hover:text-globalColor1 hover:cursor-pointer" />
            </li>
          </ul>
        </section>
      </div>

      <div
        className="flex justify-between text-footerColor py-10 text-xs "
        style={{ borderTop: '1px solid rgba(237, 242, 247, 0.15)' }}
      >
        <p>
          &copy; 2024 eShop - Built By{' '}
          <a
            href="https://github.com/nuru484"
            className=" text-globalColor1 underline hover:text-white"
          >
            Nurudeen
          </a>
        </p>
        <p>
          Privacy Policy | Cookies Policy | Terms and Conditions | Website
          Accessibility
        </p>
      </div>
    </footer>
  );
};

export default Footer;
