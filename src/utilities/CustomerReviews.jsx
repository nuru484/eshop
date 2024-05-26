import StarIcon from '@mui/icons-material/Star';
import profile from '/src/assets/profile.jpg';

const CustomerReviews = () => {
  const stars = Array(5).fill(0);
  const reviews = Array(3).fill(0);

  return (
    <div className="w-9/12 mx-auto my-16">
      <div className="flex">
        <div className="flex-1" style={{ borderRight: '1px solid #E0E0E0' }}>
          <p className="text-xs font-bold text-globalColor1 mb-2">
            TESTIMONIALS
          </p>
          <h2 className="text-6xl pr-6 py-6">What Our Clients Say</h2>
          <p className="text-sm leading-relaxed pr-6 text-globalColor5 py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center flex-1">
          <h2 className="text-9xl font-bold text-lightAsh">4.8</h2>
          <ul className="flex text-orange-400">
            {stars.map((_, index) => (
              <li key={index}>
                <StarIcon style={{ fontSize: '60px' }} />
              </li>
            ))}
          </ul>
          <h2 className="my-2 text-2xl font-bold">Average Customer Rating</h2>
        </div>
      </div>
      <div className="flex gap-8 rounded py-10">
        {' '}
        {reviews.map((_, index) => (
          <div key={index} className=" flex-1 p-12 shadow bg-backgroundColor">
            <p className="leading-relaxed text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="flex items-center gap-2 py-4">
              <img
                src={profile}
                alt="customer review photo"
                className="w-16 rounded-full"
              />

              <div className="flex flex-col gap-1.5 text-sm text-globalColor5">
                <span>Nurudeen</span>
                <span>Developer</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-normal py-4">Follow Our Instagram</h2>
        <p className="text-sm text-globalColor5">
          Lorem{' '}
          <span className="hover:cursor-pointer text-globalColor1">@ipsum</span>{' '}
          dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default CustomerReviews;
