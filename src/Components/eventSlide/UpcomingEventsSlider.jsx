import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./eventslide.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import {
  FaBangladeshiTakaSign,
  FaBookAtlas,
  FaLocationArrow,
  FaMapLocation,
  FaUsers,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UpcomingEventsSlider = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: events = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await axiosSecure.get("/events");
      return res.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching events data</div>;
  const formatToBangla = (number) => {
    return number.toLocaleString("bn-BD");
  };
  return (
    <div>
      <Helmet>
        <title>পরবর্তী চক্রসমূহ | পাঠচক্র</title>
      </Helmet>
      <div className="h-[600px]">
        <h1 className="lg:text-4xl text-2xl p-8 capitalize font-bold text-center">
          পরবর্তী চক্রসমূহ
        </h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper "
        >
          {events.slice(0,5).map((event) => (
            <SwiperSlide key={event.id}>
              <div className="card w-96 bg-basic  rounded-none border">
                <figure
                  className="h-52 relative bg-center bg-no-repeat bg-cover"
                  style={{
                    backgroundImage: `url(${event?.featuredImage})`,
                  }}
                >
                  <div className="absolute top-2 right-2 badge rounded bg-second text-white font-bold text-xl p-4">
                    {event?.costOrFees > 0 ? (
                      <>
                        {formatToBangla(event?.costOrFees)}{" "}
                        <FaBangladeshiTakaSign className="font-bold" />
                      </>
                    ) : (
                      "ফ্রি"
                    )}{" "}
                  </div>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{event?.eventTitle}</h2>
                  <div className="flex justify-between items-center gap-4 text-sm">
                    <p>{event.dateTime}</p>
                    <p className="flex gap-2 items-center">
                      <FaLocationArrow></FaLocationArrow>{" "}
                      {event?.location.physicalLocation}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <p className="flex gap-2 justify-end items-center">
                      <FaMapLocation></FaMapLocation>{" "}
                      <Link
                        to={`${event?.location.liveMap}`}
                        className="bg-yellow-400 px-4  rounded-none py-1 btn-warning"
                      >
                        লাইভ লোকেশন{" "}
                      </Link>
                    </p>
                  </div>
                  <div className="card-actions justify-between ">
                    <div>
                      <div className="">
                        অতিথী বক্তা: {event?.speakers.name}
                      </div>
                      <div className="badge badge-outline gap-">
                        <FaBookAtlas></FaBookAtlas> আলোচ্য বই:{" "}
                        {event?.featuredBook}
                      </div>
                    </div>
                    <div className="badge badge-outline gap-3">
                      <FaUsers></FaUsers> রেজিস্ট্রেশন করেছেন: ১০ জন
                    </div>
                  </div>
                  <Link to={`/event/${event._id}`}
                    type="submit"
                    className="btn btn-primary bg-second rounded-none text-white font-bold self-center w-full"
                  >
                    রেজিস্ট্রেশন করুন
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default UpcomingEventsSlider;
