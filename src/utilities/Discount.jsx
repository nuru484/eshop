import jesseGollBg from '/src/assets/jesse-goll-_MCwva4-0uY-unsplash.jpg';

const Discount = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="relative bg-globalColor1">
      <div
        style={{
          backgroundImage: `url(${jesseGollBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-blue-500 opacity-75 z-10" />

      <div className="relative z-20 p-4 text-white flex flex-col items-center py-10">
        <p className="text-4xl p-4">Sign Up & Get 25% Off*</p>
        <form
          action="#"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 my-10"
        >
          <input
            type="email"
            placeholder="Email Address"
            className="w-80  p-3 text-xs text-globalColor5"
          />
          <button
            type="submit"
            className="w-80 p-3 text-xs bg-customOrange hover:bg-customOrangeHover"
          >
            Submit
          </button>
        </form>
        <p className="w-2/5 text-center leading-normal py-6">
          *Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          sodиales leo nunc, at euismod metus facilisis sed. Class aptent taciti
          sociosqu ad litora torquent per.
        </p>
      </div>
    </div>
  );
};

export default Discount;
