import "./styles.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../HomeComponents/styles.css";
// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useFormatToBangle from "../../../Hooks/useFormatToBangle";
import { FaUserAlt } from "react-icons/fa";
import { FaBangladeshiTakaSign, FaBook, FaMapLocation } from "react-icons/fa6";
const BannerSlider = () => {
  const { formatToBengaliDate } = useFormatToBangle();
  const {
    data: latestEvent = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["latest-event"],
    queryFn: async () => {
      const res = await axiosSecure.get("/latest-event");
      return res.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching events data</div>;

  const {
    agenda = [],
    costOrFees,
    dateTime,
    description,
    eventTitle,
    featuredBook,
    featuredImage,
    location = {},
    registrationInfo,
    registrationDeadline,
    speakers = {},
    _id,
  } = latestEvent;

  const bengaliFormattedDate = formatToBengaliDate(dateTime);
  const formatToBangla = (number) => {
    return number.toLocaleString("bn-BD");
  };
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper bannerSlide min-h-[70vh]"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            background:
              "linear-gradient(to bottom, rgb(0, 0, 0), rgba(57, 53, 53, 0.5)),url(https://i.ibb.co/86983GD/patrick-tomasso-Oaqk7qq-Nh-c-unsplash.jpg)",
            backgroundSize: "revert-layer",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide className="">
          <div className="flex justify-center items-center flex-col ">
            <div className="title" data-swiper-parallax="-300">
              <img
                src="https://i.ibb.co/YdFnxW3/Colorful-Modern-Infinity-Technology-Free-Logo.png"
                alt=""
                className="w-2/6 mx-auto bannerSlideImg rounded-lg"
              />
            </div>
            <div
              className="py-4 text-3xl font-semibold"
              data-swiper-parallax="-200"
            >
              বইয়ের চক্র, বইয়ের জীবন।
            </div>
            <div
              className="w-3/5 mx-auto text-center"
              data-swiper-parallax="-100"
            >
              <p className="mb-4">
                পাঠ চক্রে স্বাগতম! এখানে আমরা প্রতি সপ্তাহে একত্রিত হয়ে বই পড়ি
                এবং বই নিয়ে আলোচনা করি।এখানে আমরা প্রতি সপ্তাহে একত্রিত হয়ে বই
                পড়ি এবং বই নিয়ে আলোচনা করি। আমাদের লক্ষ্য হল বই পড়া এবং
                আলোচনা মাধ্যমে জ্ঞান বৃদ্ধি করা এবং পাঠকদের মধ্যে মেলবন্ধন
                সৃষ্টি করা। আসন্ন ইভেন্ট{" "}
                <span className="text-yellow-400 bg-second font-bold px-2">
                  {eventTitle}
                </span>{" "}
                {bengaliFormattedDate} তারিখে অনুষ্ঠিত হবে, বিশেষ সেশনের জন্য
                এখনই নিবন্ধন করুন!
              </p>
              <Link
                to={"/event"}
                className="btn rounded-none bg-basic hover:bg-second border-none text-white text-lg "
              >
                নিবন্ধন করুন
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container flex mx-auto items-center justify-center w-4/5 gap-5">
            <div className="basis-1/2 relative">
              <img src={featuredImage} className="slideEventImg" alt="" />
              <div className="absolute top-2 right-2 badge rounded bg-second text-white font-bold text-xl p-4">
                {costOrFees > 0 ? (
                  <>
                    {formatToBangla(costOrFees)}{" "}
                    <FaBangladeshiTakaSign className="font-bold" />
                  </>
                ) : (
                  "ফ্রি"
                )}{" "}
              </div>
            </div>
            <div className="basis-1/2">
              <h1 className="text-left text-yellow-400 text-4xl font-bold pb-2">
                পরবর্তী চক্র
              </h1>
              <h1 className="text-2xl font-bold mb-4">{eventTitle}</h1>
              <p className="text-[17px] flex gap-2">
                <FaUserAlt></FaUserAlt> {speakers.name}
              </p>
              <h2 className="text-[17px] mt-2 flex gap-2">
                <FaBook></FaBook> আলোচ্য বই:<p>{featuredBook}</p>
              </h2>
              <p className="text-[17px] mt-2 flex gap-2">
                <FaMapLocation></FaMapLocation>
                শশরীর যুক্ত হতে:{" "}
                <span className="">{location?.physicalLocation}</span>
              </p>
              <p className="font-bold text-xl">
                তারিখ: <span className="">{bengaliFormattedDate} </span>
              </p>
              <Link
                to={"/event"}
                className="btn rounded-none bg-second text-[16px] font-bold text-white btn-primary border-none self-center w-full mt-4"
              >
                নিবন্ধন করুন
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSlider;
