import "./styles.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const BannerSlider = () => {
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
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            background:
              "linear-gradient(to bottom, rgb(0, 0, 0), rgba(57, 53, 53, 0.5)),url(https://i.ibb.co/86983GD/patrick-tomasso-Oaqk7qq-Nh-c-unsplash.jpg)",
            'backgroundSize': "revert-layer",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="flex justify-center items-center flex-col min-h-[70vh]">
            <div className="title" data-swiper-parallax="-300">
              <img
                src="https://i.ibb.co/YdFnxW3/Colorful-Modern-Infinity-Technology-Free-Logo.png"
                alt=""
                className="w-2/6 mx-auto rounded-lg logo"
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
                সৃষ্টি করা। আসন্ন ইভেন্ট 'মে মাসের পঠিত বই' ২৫ মে ২০২৪ তারিখে
                অনুষ্ঠিত হবে, বিশেষ সেশনের জন্য এখনই নিবন্ধন করুন!
              </p>
              <Link
                to={"/"}
                className="btn rounded-none bg-basic hover:bg-second border-none text-white text-lg "
              >
                নিবন্ধন করুন
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-center items-center flex-col min-h-[70vh]">
            <div className="title" data-swiper-parallax="-300">
              <img
                src="https://i.ibb.co/YdFnxW3/Colorful-Modern-Infinity-Technology-Free-Logo.png"
                alt=""
                className="w-2/6 mx-auto rounded-lg logo"
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
                সৃষ্টি করা। আসন্ন ইভেন্ট 'মে মাসের পঠিত বই' ২৫ মে ২০২৪ তারিখে
                অনুষ্ঠিত হবে, বিশেষ সেশনের জন্য এখনই নিবন্ধন করুন!
              </p>
              <Link
                to={"/"}
                className="btn rounded-none bg-basic hover:bg-second border-none text-white text-lg "
              >
                নিবন্ধন করুন
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-center items-center flex-col min-h-[70vh]">
            <div className="title" data-swiper-parallax="-300">
              <img
                src="https://i.ibb.co/YdFnxW3/Colorful-Modern-Infinity-Technology-Free-Logo.png"
                alt=""
                className="w-2/6 mx-auto rounded-lg logo"
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
                সৃষ্টি করা। আসন্ন ইভেন্ট 'মে মাসের পঠিত বই' ২৫ মে ২০২৪ তারিখে
                অনুষ্ঠিত হবে, বিশেষ সেশনের জন্য এখনই নিবন্ধন করুন!
              </p>
              <Link
                to={"/"}
                className="btn rounded-none bg-basic hover:bg-second border-none text-white text-lg "
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
