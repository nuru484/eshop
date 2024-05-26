import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

const WhyChooseUs = () => {
  return (
    <div className="grid grid-cols-3 w-9/12 mx-auto bg-WhyChooseUsColor p-10 my-10 text-globalColor5">
      <div className="p-8 text-5xl leading-tight font-normal">
        <p>Why Choose Us</p>
      </div>
      <div className="py-8 px-5 hover:bg-WhyChooseUsColorHover">
        <ProductionQuantityLimitsIcon
          style={{ fontSize: '120px' }}
          className="mb-4"
        />
        <h2 className="text-xl font-bold mb-2">No Minimum Order </h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div className="py-8 px-5 hover:bg-WhyChooseUsColorHover">
        <Inventory2Icon style={{ fontSize: '120px' }} className="mb-4" />
        <h2 className="text-xl font-bold mb-2">Huge Product Variety </h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div className="py-8 px-5 hover:bg-WhyChooseUsColorHover">
        <MonetizationOnIcon style={{ fontSize: '120px' }} className="mb-4" />
        <h2 className="text-xl font-bold mb-2">Afforadable Products</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div className="py-8 px-5 hover:bg-WhyChooseUsColorHover">
        <ThumbUpIcon style={{ fontSize: '120px' }} className="mb-4" />
        <h2 className="text-xl font-bold mb-2">High Quality Products </h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div className="py-8 px-5 hover:bg-WhyChooseUsColorHover">
        <LocalShippingIcon style={{ fontSize: '120px' }} className="mb-4" />
        <h2 className="text-xl font-bold mb-2">Gh & Global Shipping</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
    </div>
  );
};

export default WhyChooseUs;
