import { Banner, Advertisement } from "../components/Hero";
import { NewArrivals } from "../components/Books";

const Home = () => {
  return (
    <div className="mb-10">
      <Banner />
      <Advertisement />
      <NewArrivals />
    </div>
  );
};

export default Home;
