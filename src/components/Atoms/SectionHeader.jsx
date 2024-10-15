const SectionHeader = ({ title }) => {
  return (
    <div className="mb-16 text-center">
      <h1 className="text-3xl font-bold uppercase font-Josefin">{title}</h1>
      <div className="w-20 h-1 mx-auto mt-2 bg-tertiary"></div>
    </div>
  );
};

export default SectionHeader;
