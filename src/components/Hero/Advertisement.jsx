import { advertisementData } from "../../assets/data";

const Advertisement = () => {
  return (
    <div className="hidden bg-primary_background lg:block">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between py-8">
          {advertisementData.map((item, index) => (
            <div key={index} className="flex items-center gap-x-5">
              <item.icon size={40} />
              <div className="flex flex-col items-start">
                <h3 className="text-lg font-medium uppercase">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
