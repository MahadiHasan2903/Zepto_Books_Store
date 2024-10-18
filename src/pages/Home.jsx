import { Banner, Advertisement } from "../components/Hero";
import { NewArrivals } from "../components/Books";
import { NewsLetter } from "../components/Layout";

const Home = () => {
  return (
    <div className="w-full">
      <Banner />
      <Advertisement />
      <NewArrivals />
      <NewsLetter />
    </div>
  );
};

export default Home;
