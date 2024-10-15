import Lottie from "lottie-react";
import animationData from "../../assets/animation.json";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-[80vh]">
      <Lottie animationData={animationData} width={300} height={300} />
    </div>
  );
};

export default Loader;
