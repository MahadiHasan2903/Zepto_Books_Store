import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineDiscount } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { RxReload } from "react-icons/rx";

const advertisementData = [
  {
    icon: MdOutlineDiscount,
    title: "Best Price",
    description: "Guaranteed Price",
  },
  {
    icon: RxReload,
    title: "Free Returns",
    description: "Within 30 Days returns",
  },
  {
    icon: LiaShippingFastSolid,
    title: "Free Shipping",
    description: "Order over $100",
  },
  {
    icon: RiSecurePaymentLine,
    title: "Secure Payment",
    description: "100% Secure Payment",
  },
];

const Advertisement = () => {
  return (
    <div className="bg-[#DEDEDE]">
      <div className="max-w-[1440px] mx-auto">
        <div className="py-8 flex items-center justify-between">
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
