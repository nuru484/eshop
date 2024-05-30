import tShirt from '/src/assets/t-shirt-4.jpg';
import mug from '/src/assets/mug2.jpg';
import hat from '/src/assets/hat.jpg';
import badges from '/src/assets/badges.jpg';
import hoodie from '/src/assets/hoodie.jpg';
import cases from '/src/assets/cases.jpg';

const ProductCategories = () => {
  const products = [
    { image: tShirt, name: 'T-Shirts' },
    { image: mug, name: 'Mugs' },
    { image: hat, name: 'Hats' },
    { image: badges, name: 'Badges' },
    { image: hoodie, name: 'Hoodies' },
    { image: cases, name: 'Cases' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-9/12 mx-auto my-8">
      {products.map((product, index) => (
        <section
          key={index}
          className="relative bg-cover bg-center h-52 w-auto flex items-end p-3 text-white"
          style={{
            backgroundImage: `url(${product.image})`,
          }}
        >
          <div className="bg-black bg-opacity-50 w-full p-2 text-center">
            <p className="font-bold">{product.name}</p>
            <p className="underline hover:cursor-pointer hover:text-lightAsh">
              View All
            </p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductCategories;
