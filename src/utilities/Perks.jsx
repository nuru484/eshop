import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GppGoodIcon from '@mui/icons-material/GppGood';

const Perks = () => {
  return (
    <div className="flex justify-center list-none text-xs mt-6">
      <div className="flex flex-row items-center gap-4 py-4 m-3 px-5 shadow-sm">
        <li>
          <LocalShippingIcon />
        </li>
        <div>
          <p className="font-semibold">Shipping Perks</p>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>

      <div className="flex flex-row items-center gap-4 py-4 px-5 shadow-sm">
        <li>
          <CurrencyExchangeIcon />
        </li>
        <div>
          <p className="font-semibold">Money Back Guarantee</p>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>

      <div className="flex flex-row items-center gap-4 py-4 px-5 shadow-sm">
        <li>
          <SupportAgentIcon />
        </li>
        <div>
          <p className="font-semibold">Customer Service</p>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>

      <div className="flex flex-row items-center gap-4 py-4 px-5 shadow-sm">
        <li>
          <GppGoodIcon />
        </li>
        <div>
          <p className="font-semibold">Good Products</p>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  );
};

export default Perks;
