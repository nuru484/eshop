import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const Socials = () => {
  return (
    <div className="flex justify-around bg-globalColor1 py-1 text-white">
      <span></span>
      <p className="text-xs font-sans">
        Free Shipping on $50+, Free Returns on All Orders.
      </p>
      <ul className="flex gap-4 text-xs">
        <li>
          <FacebookIcon style={{ fontSize: '20px' }} />
        </li>
        <li>
          <XIcon style={{ fontSize: '20px' }} />
        </li>
        <li>
          <InstagramIcon style={{ fontSize: '20px' }} />
        </li>
      </ul>
    </div>
  );
};

export default Socials;
