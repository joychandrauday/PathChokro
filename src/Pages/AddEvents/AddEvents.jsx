import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/Provider";

const AddEvents = () => {
    const {user} =useContext(AuthContext)
  const [formData, setFormData] = useState({
    eventTitle: "",
    dateTime: "",
    physicalLocation: "",
    virtualLocation: "",
    description: "",
    agenda: "",
    speakers: "",
    registrationInfo: "",
    cost: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Here, you can handle the form submission, like sending the data to a server.
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl fo nt-extrabold capitalize text-center pb-8">
          Add a New Book
        </h1>
        <form
          onSubmit={handleSubmit}
          className="lg:flex gap-8"
          encType="multipart/form-data"
        >
          <div className=" flex flex-col lg:w-1/2">
           <input
              type="text"
              name="image"
              className="input input-bordered mb-4"
              placeholder="পরবর্তী বই চক্রের কভার ছবির লিংক"
              required
            />
           <input
              type="text"
              name="book_name"
              className="input input-bordered mb-4"
              placeholder="পরবর্তী বই চক্রের নাম"
              required
            />
           {/* <select name="genre" className="input input-bordered mb-4" required>
              <option value="">Select Genre</option>
              <option value="fiction">Fiction</option>
              <option value="non-fiction">Non-Fiction</option>
              <option value="mystery">Mystery</option>
              <option value="fantasy">Fantasy</option>
              <option value="romance">Romance</option>
              <option value="science-fiction">Science Fiction</option>
              <option value="thriller">Thriller</option>
              <option value="horror">Horror</option>
              <option value="biography">Biography</option>
              <option value="historical-fiction">Historical Fiction</option>
              <option value="self-help">Self-Help</option>
              <option value="poetry">Poetry</option>
            </select> */}
           <input
              type="text"
              name="specialGuest"
              className="input input-bordered mb-4"
              placeholder="বিশেষ অতিথী (যদি থাকে)"
            />
             <textarea
              name="short_description"
              className="input input-bordered mb-4"
              placeholder="বইচক্রের বিস্তারিত"
              required
            ></textarea>
            <label className="mb-2">পরবর্তী ইভেন্টের তারিখ</label>
              <input
                type="datetime-local"
                name="eventDate"
                className="input input-bordered mb-4"
                placeholder="পরবর্তী ইভেন্টের তারিখ"
                required
              />
            
          </div>
          <div className="flex flex-col lg:w-1/2">
            <input
              type="text"
              name="location"
              className="input input-bordered mb-4"
              placeholder="গুগল লোকেশন লিংক"
              required
            />
            <input
              type="number"
              name="registrationFees"
              className="input input-bordered mb-4"
              placeholder="রেজিস্ট্রেশন ফি(যদি ফ্রি হয় তাহলে ০ বসান)"
              required
            />
            <label className="mb-2">রেজিস্ট্রেশন ডেডলাইন</label>
            <input
              type="datetime-local"
              name="registrationDeadline"
              className="input input-bordered mb-4"
              placeholder=""
              required
            />

            <input
              type="email"
              name="userEmail"
              defaultValue={user.email}
              className="input input-bordered mb-4"
              readOnly
            />
            <input
              type="text"
              name="userName"
              defaultValue={user.displayName}
              className="input input-bordered mb-4"
              readOnly
            />
            <button
              type="submit"
              className="btn btn-primary self-center w-full"
            >
              Add The Book To Library.
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvents;
