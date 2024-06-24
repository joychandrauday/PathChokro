import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Gallery } from "react-grid-gallery";
import { Link } from "react-router-dom";

const OurStories = () => {
  const axiosSecure = useAxiosSecure();
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axiosSecure.get("/aboutgallery");
        setGallery(res.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchGallery();
  }, [axiosSecure]);

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    );
  if (isError) return <div>Error fetching events data</div>;

  const images = gallery.map((img) => ({
    src: img.src,
    thumbnail: img.src,
    width: 320,
    height: 174,
    caption: img.caption || "Image Caption Here",
  }));

  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-8">আমাদের গল্প</h1>
      <div className="w-full max-w-4xl">
        {images.length > 0 ? (
          <Gallery images={images} />
        ) : (
          <p>No images to display</p>
        )}
      </div>
      <div className="w-full max-w-4xl mt-8">
        <h1 className="font-bold text-2xl">পাঠ চক্রে স্বাগতম!</h1>
        <p className="text-lg">
          পাঠ চক্রে আপনাকে স্বাগতম! আমরা একটি সম্প্রদায় যেখানে প্রতি সপ্তাহে
          আমরা একত্রিত হয়ে বই পড়ি এবং বই নিয়ে গভীর আলোচনা করি। আমাদের সবারই
          একটাই লক্ষ্য - বই পড়ার মাধ্যমে জ্ঞান বৃদ্ধি করা এবং পাঠকদের মধ্যে এক
          অনন্য মেলবন্ধন সৃষ্টি করা। প্রতি সপ্তাহে আমরা এক নতুন বই বেছে নিই, যা
          আমরা একত্রে পড়ি এবং আমাদের অভিজ্ঞতা, অনুভূতি এবং চিন্তাধারা শেয়ার
          করি। এটি শুধু বই পড়ার আনন্দই নয়, এটি আমাদের জীবনের অভিজ্ঞতাগুলোরও
          একটি অংশ। আমাদের আলোচনাগুলো শুধুমাত্র বইয়ের বিষয়বস্তুর মধ্যে
          সীমাবদ্ধ থাকে না। আমরা বইয়ের বিষয়বস্তুকে কেন্দ্র করে আমাদের নিজস্ব
          অভিজ্ঞতা এবং দৃষ্টিভঙ্গি ভাগ করে নিই। এই প্রক্রিয়ার মাধ্যমে, আমরা
          কেবল বইয়ের পাতা থেকে শেখা নয়, বরং একে অপরের কাছ থেকেও শেখার সুযোগ
          পাই। আমাদের সম্প্রদায়ের প্রতিটি সদস্য তাদের নিজস্ব গল্প নিয়ে আসে।
          আমাদের সবার গল্প আলাদা, কিন্তু বইয়ের প্রতি আমাদের ভালোবাসা আমাদের
          একত্রিত করে। আমরা বিশ্বাস করি যে, একসাথে পড়ার মাধ্যমে আমরা একে অপরকে
          সমৃদ্ধ করতে পারি।
        </p>
        <h1 className="font-bold text-2xl mt-4">আমাদের লক্ষ্য:</h1>
        <p className="text-lg">
          আমাদের প্রধান লক্ষ্য হলো বই পড়ার মাধ্যমে জ্ঞান বৃদ্ধি করা এবং পাঠকদের
          মধ্যে গভীর মেলবন্ধন সৃষ্টি করা। আমরা চাই যে, আমাদের আলোচনার মাধ্যমে
          পাঠকরা নতুন চিন্তাধারা এবং দৃষ্টিভঙ্গি অর্জন করবে। বই আমাদেরকে বিভিন্ন
          সংস্কৃতি, ইতিহাস এবং মানব অভিজ্ঞতার সঙ্গে পরিচিত করায়। আমাদের পাঠ
          চক্র সেই অভিজ্ঞতাগুলোকে আরও জীবন্ত করে তোলে। এখানে প্রতিটি পাঠকই একটি
          গুরুত্বপূর্ণ অংশ, এবং তাদের প্রতিটি অবদান আমাদের আলোচনাকে আরও সমৃদ্ধ
          করে তোলে।
        </p>
        <h1 className="font-bold text-2xl mt-4">যোগ দিন!! </h1>
        <p className="text-lg">
          আপনি যদি বই পড়তে ভালোবাসেন এবং নতুন দৃষ্টিভঙ্গি অর্জন করতে চান, তাহলে
          আমাদের সঙ্গে যোগ দিন। আমরা বিশ্বাস করি যে, প্রতিটি পাঠকই একটি গল্প
          নিয়ে আসে, এবং আমরা সেই গল্পগুলোকে উদযাপন করতে চাই। পাঠ চক্রে স্বাগতম!
          আসুন, আমরা একত্রে বই পড়ি এবং আমাদের জ্ঞান ও অভিজ্ঞতা ভাগ করে নিই।
        </p>
        <Link to={'/event'}
              type="submit"
              className="btn rounded-none bg-second text-[16px] font-bold text-white btn-primary self-center w-full"
            >
              নিবন্ধন করুন
            </Link>
      </div>
    </div>
  );
};

export default OurStories;
