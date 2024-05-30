import { Helmet } from "react-helmet-async";
import BannerSlider from "./HomeComponents/BannerSlider";
import UpcomingEventsSlider from "./HomeComponents/UpcomingEventsSlider";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>পাঠচক্র : বইয়ের চক্র, বইয়ের জীবন।</title>
      </Helmet>
      <div className="flex items-center justify-center w-full">
        <BannerSlider></BannerSlider>
      </div>
      <div className="upcommingEvents py-8">
        <div>
          <UpcomingEventsSlider></UpcomingEventsSlider>
        </div>
      </div>
    </div>
  );
};

export default Home;
