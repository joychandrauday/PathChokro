import { Helmet } from "react-helmet-async";
import BannerSlider from "./HomeComponents/BannerSlider";
import UpcomingEventsSlider from "../../Components/eventSlide/UpcomingEventsSlider";
import FeaturedBooks from "./HomeComponents/FeaturedBooks";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>পাঠচক্র : বইয়ের চক্র, বইয়ের জীবন।</title>
      </Helmet>
      <div className="flex items-center justify-center w-full">
        <BannerSlider></BannerSlider>
      </div>
      <div className="upcommingEvents py-24">
        <div>
          <UpcomingEventsSlider></UpcomingEventsSlider>
        </div>
      </div>
      <div className="featuredBooks py-24">
        <FeaturedBooks></FeaturedBooks>
      </div>
    </div>
  );
};

export default Home;
