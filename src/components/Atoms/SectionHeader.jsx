const SectionHeader = ({ title }) => {
  return (
    <div className="mb-6 text-center lg:mb-12">
      <h1 className="text-xl font-bold uppercase lg:text-3xl font-Josefin">
        {title}
      </h1>
      <div className="w-20 h-1 mx-auto mt-2 bg-tertiary"></div>
    </div>
  );
};

export default SectionHeader;
