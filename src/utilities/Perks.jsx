import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GppGoodIcon from '@mui/icons-material/GppGood';

const perksData = [
  {
    icon: <LocalShippingIcon />,
    title: 'Shipping Perks',
    description: 'Lorem ipsum dolor sit amet',
  },
  {
    icon: <CurrencyExchangeIcon />,
    title: 'Money Back Guarantee',
    description: 'Lorem ipsum dolor sit amet',
  },
  {
    icon: <SupportAgentIcon />,
    title: 'Customer Service',
    description: 'Lorem ipsum dolor sit amet',
  },
  {
    icon: <GppGoodIcon />,
    title: 'Good Products',
    description: 'Lorem ipsum dolor sit amet',
  },
];

const PerkItem = ({ icon, title, description }) => (
  <div className="flex flex-row items-center gap-4 py-4 px-5 shadow-sm">
    <li>{icon}</li>
    <div>
      <p className="font-semibold">{title}</p>
      <p>{description}</p>
    </div>
  </div>
);

const Perks = () => {
  return (
    <div className="flex justify-center list-none text-xs my-8">
      {perksData.map((perk, index) => (
        <PerkItem
          key={index}
          icon={perk.icon}
          title={perk.title}
          description={perk.description}
        />
      ))}
    </div>
  );
};

export default Perks;
