const Socials = () => {
  return (
    <div className="flex justify-around bg-globalColor1 py-1 text-white">
      <span></span>
      <p className=" text-xs font-sans">
        Free Shipping on $50+, Free Returns on All Orders.
      </p>
      <ul className="flex gap-4 text-xs">
        <li>
          <i className="fab fa-facebook-square" aria-hidden="true"></i>
        </li>
        <li>
          <i className="fab fa-twitter-square" aria-hidden="true"></i>
        </li>
        <li>
          <i className="fab fa-instagram" aria-hidden="true"></i>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
