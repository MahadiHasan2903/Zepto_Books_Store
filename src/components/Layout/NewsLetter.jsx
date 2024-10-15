const NewsLetter = () => {
  return (
    <div className="w-full mt-20 bg-primary_background">
      <div className="flex items-center gap-x-52 justify-between w-[1440px] mx-auto py-12">
        <div className="w-1/2">
          <h1 className="mb-10 text-3xl font-semibold uppercase text-tertiary">
            Subscribe to our News letter
          </h1>
          <p className="text-gray-600 font-Josefin">
            Enter your email address to receive regular updates, as well as news
            on upcoming events and specific offers.
          </p>
        </div>
        <div className="flex items-center w-1/2">
          <input
            type="text"
            placeholder="Email Address"
            className="w-2/3 px-4 py-[10px] text-gray-600 bg-transparent border-2 font-Josefin border-tertiary"
          />
          <button className="px-10 py-3 text-white transition-all bg-black font-Josefin hover:bg-tertiary">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
