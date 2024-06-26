import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { ScrollRestoration, useParams } from "react-router-dom";
import useAxiosSecure, { axiosSecure } from "../../Hooks/useAxiosSecure";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import useFormatToBangle from "../../Hooks/useFormatToBangle";
import { Helmet } from "react-helmet-async";
const SingleEvent = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { formatToBengaliDate } = useFormatToBangle();
  const [isEventExpired, setIsEventExpired] = useState(false);

  const {
    data: event = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["event", id], // Include id in queryKey for caching
    queryFn: async () => {
      const res = await axiosSecure.get(`/event/${id}`);
      return res.data;
    },
  });
  useEffect(() => {
    if (event.dateTime) {
      const eventDate = new Date(event.dateTime);
      const currentDate = new Date();
      setIsEventExpired(currentDate > eventDate);
    }
  }, [event]);
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    );
  }

  if (isError) {
    return <div>Error fetching story data</div>;
  }
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
  } = event;

  const formatToBangla = (number) => {
    return number.toLocaleString("bn-BD");
  };

  const bengaliFormattedDate = formatToBengaliDate(dateTime);
  const bengaliFormattedDeadline = formatToBengaliDate(registrationDeadline);
  return (
    <div>
      <Helmet>
        <title>{eventTitle} | পাঠচক্র</title>
      </Helmet>
      <div className="container mx-auto py-12">
        <div className="flex justify-center gap-4 flex-row-reverse">
          <div className="banner basis-1/2 relative">
            <img src={featuredImage} alt="2/5" className="mx-auto w-full" />
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
            <div
              className={
                isEventExpired
                  ? "badge rounded-none text-xl w-full text-white py-4 bg-red-600 gap-2"
                  : "badge rounded-none text-xl w-full py-4 badge-warning gap-2"
              }
            >
              {isEventExpired
                ? "ইভেন্ট টি আয়োজিত হয়েছে!!"
                : `${bengaliFormattedDeadline}এর মধ্যে নিবন্ধন করুন।`}
            </div>
            <button
              type="submit"
              className="btn rounded-none bg-second text-[16px] font-bold text-white btn-primary self-center w-full"
              disabled={isEventExpired} // Disable button if event is expired
            >
              নিবন্ধন করুন
            </button>
          </div>
          <div className="content basis-3/5">
            <h1 className="text-4xl font-bold mb-4">{eventTitle}</h1>
            <p className="font-bold text-xl">
              তারিখ:{" "}
              <span className="text-second">{bengaliFormattedDate} </span>
            </p>
            <p className="text-xl py-4">{description}</p>
            <div className="flex gap-4">
              <div className="basis-1/2">
                <h2 className="text-2xl mt-4 mb-2 font-bold">ঘটনাসূচী</h2>
                <ul className="list-disc list-inside text-xl">
                  {agenda.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="basis-1/2">
                <h2 className="text-2xl mt-4 mb-2 font-bold">অতিথী বক্তা:</h2>
                <p className="text-[17px]">{speakers.name}</p>
                <p className="text-[17px]">{speakers.details}</p>
                <h2 className="text-2xl mt-4 mb-2 font-bold">আলোচ্য বই:</h2>
                <p>{featuredBook}</p>
              </div>
            </div>
            <h2 className="text-2xl mt-4 mb-2 font-bold">স্থান</h2>
            <p className="text-[17px]">
              শশরীর যুক্ত হতে:{" "}
              <span className="font-bold text-second">
                {location?.physicalLocation}
              </span>
            </p>
            <p className="text-[17px]">
              অনলাইনে যুক্ত হতে:{" "}
              <span className="font-bold text-second">
                {location.virtualLocation}
              </span>
            </p>
            <p className="text-[17px]">
              লাইভ মানচিত্র:{" "}
              <a href={location.liveMap}>
                <span className="font-bold text-second">
                  {location.liveMap}
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default SingleEvent;
