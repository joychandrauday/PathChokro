import React from "react";

const EventsCard = ({ event }) => {
  const {
    eventTitle,
    featuredBook,
    location,
    dateTime,
    costOrFees,
    featuredImage,
  } = event;
  return (
    <div className="card w-96 bg-basic rounded-none border">
      <figure
        className="h-52 relative bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${event?.featuredImage})` }}
      >
        <div className="absolute top-2 right-2 badge rounded bg-second text-white font-bold text-xl p-4">
          {event?.costOrFees > 0 ? (
            <>
              {formatToBangla(event?.costOrFees)}{" "}
              <FaBangladeshiTakaSign className="font-bold" />
            </>
          ) : (
            "ফ্রি"
          )}
        </div>
      </figure>
      <div className="card-body pt-4">
        <h2 className="card-title">{event?.eventTitle}</h2>
        <div className="flex justify-between items-center gap-4 text-sm">
          <p>{event.dateTime}</p>
          <p className="flex gap-2 items-center">
            <FaLocationArrow /> {event?.location?.physicalLocation}
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <p className="flex gap-2 justify-end items-center">
            <FaMapLocation />{" "}
            <Link
              to={`${event?.location?.liveMap}`}
              className="bg-yellow-400 px-4 rounded-none py-1 btn-warning"
            >
              লাইভ লোকেশন
            </Link>
          </p>
        </div>
        <div className="card-actions justify-between">
          <div>
            <div className="">অতিথী বক্তা: {event?.speakers?.name}</div>
            <div className="badge badge-outline gap-3">
              <FaBookAtlas /> আলোচ্য বই: {event?.featuredBook}
            </div>
          </div>
          <div className="badge badge-outline gap-3">
            <FaUsers /> রেজিস্ট্রেশন করেছেন:{" "}
            {formatToBangla(event?.registrationCount || 0)} জন
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary bg-second rounded-none text-white font-bold self-center w-full"
        >
          রেজিস্ট্রেশন করুন
        </button>
      </div>
    </div>
  );
};

export default EventsCard;
