import React, { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const FeaturedBooks = () => {
  const axiosSecure = useAxiosSecure();
  const [isExpanded, setIsExpanded] = useState(false);
  
  const {
    data: featuredBooks = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["featured-books"],
    queryFn: async () => {
      const res = await axiosSecure.get("/featured-books");
      return res.data;
    },
  });

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-dots loading-md"></span>
      </div>
    );
  if (isError) return <div>Error fetching events data</div>;

  
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold  pb-5">ফিচার্ড বই</h1>
      <div className="h-96 carousel carousel-vertical rounded-box w-3/4 pb-8 mx-auto">
        {featuredBooks.slice(0,5).map((book) => (
          <div key={book._id} className="carousel-item h-full p-4 m-2 bg-second">
            <div className="flex justify-center gap-2  p-2  text-white">
              <div className="basis-1/3">
                <img src={book.bookImage} className="h-full shadow-lg shadow-black" />
              </div>
              <div className="basis-2/3 pb-4 text-left flex flex-col  ">
                <h1 className="text-2xl font-bold">{book.bookName}</h1>
                <h1 className="text-xl font-semibold">{book.authorName}</h1>
                <div className="text-lg">
                  <p>{
                    isExpanded ? book.bookDetails : book.bookDetails.slice(0, 700)
                    }...</p>
                  {book.bookDetails.length > 700 && (
                    <button onClick={toggleText} className="text-blue-500 ml-2">
                      {isExpanded ? "See Less" : "See More"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
