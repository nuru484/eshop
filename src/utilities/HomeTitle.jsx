import backgroundImage from '/src/assets/bg_03.jpg';

const HomeTitle = () => {
  return (
    <div
      className="flex flex-col bg-cover min-h-full p-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h2 className="text-6xl font-extrabold m-5 py-10 text-center max-w-1/2 w-1/2 mx-auto">
        Cheer Yourself Up with a New Product
      </h2>

      <button className=" bg-globalColor1 max-w-36 p-4 mx-auto text-white rounded hover:bg-globalColor2">
        Discover Now
      </button>
    </div>
  );
};

export default HomeTitle;
