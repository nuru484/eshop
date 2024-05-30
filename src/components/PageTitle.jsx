import backgroundImage from '/src/assets/bg_03.jpg';

const PageTitle = ({ titleOfPage }) => {
  return (
    <div>
      <h1
        className="text-5xl font-bold p-16 text-center font-sans  "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {titleOfPage}
      </h1>
    </div>
  );
};

export default PageTitle;
