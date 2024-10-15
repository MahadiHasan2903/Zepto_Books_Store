import { Banner, Advertisement } from "../components/Hero";
import { NewArrivals } from "../components/Books";
import { NewsLetter } from "../components/Layout";

const Home = () => {
  return (
    <div>
      <Banner />
      <Advertisement />
      <NewArrivals />
      <NewsLetter />
    </div>
  );
};

export default Home;
