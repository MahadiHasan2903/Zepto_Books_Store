const NewsLetter = () => {
  return (
    <div className="w-full mt-20 bg-primary_background">
      <div className="flex flex-col lg:flex-row gap-y-5 lg:gap-y-0 gap-x-0 lg:gap-x-10  items-start lg:items-center justify-start lg:justify-between max-w-full lg:max-w-[1280px] lg:mx-auto mx-3 py-12">
        <div className="w-full lg:w-1/2">
          <h1 className="mb-5 text-lg font-semibold uppercase lg:mb-10 lg:text-3xl text-tertiary">
            Subscribe to our News letter
          </h1>
          <p className="text-sm text-gray-600 font-Josefin lg:text-md">
            Enter your email address to receive regular updates, as well as news
            on upcoming events and specific offers.
          </p>
        </div>
        <div className="flex items-center w-full lg:justify-end lg:w-1/2">
          <input
            type="text"
            placeholder="Email Address"
            className="w-2/3 px-4 py-[10px] text-gray-600 bg-transparent border-2 font-Josefin border-tertiary"
          />
          <button className="px-4 py-3 text-white transition-all bg-black lg:px-10 font-Josefin hover:bg-tertiary">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
