import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/Provider";
import useAxiosSecure from './../../Hooks/useAxiosSecure';
import Swal from "sweetalert2";

const AddEvents = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure=useAxiosSecure()
  const [formData, setFormData] = useState({
    eventTitle: "",
    dateTime: "",
    location: {
      physicalLocation: "",
      virtualLocation: "",
      liveMap: "",
    },
    description: "",
    agenda: [""],
    speakers: {
      name: "",
      details: "",
    },
    registrationDeadline: "",
    costOrFees: "",
    featuredBook: "",
    featuredImage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("location")) {
      const locationField = name.split(".")[1];
      setFormData({
        ...formData,
        location: {
          ...formData.location,
          [locationField]: value,
        },
      });
    } else if (name.includes("speakers")) {
      const speakersField = name.split(".")[1];
      setFormData({
        ...formData,
        speakers: {
          ...formData.speakers,
          [speakersField]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleAgendaChange = (index, value) => {
    const newAgenda = formData.agenda.map((item, i) =>
      i === index ? value : item
    );
    setFormData({
      ...formData,
      agenda: newAgenda,
    });
  };

  const addAgendaStep = () => {
    setFormData({
      ...formData,
      agenda: [...formData.agenda, ""],
    });
  };

  const removeAgendaStep = (index) => {
    const newAgenda = formData.agenda.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      agenda: newAgenda,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    axiosSecure.post('/event', formData)
    .then(function (response) {
      if (response.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: " ইভেন্ট যোগ করা হয়েছে !! ",
          showConfirmButton: true,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "কিছু একটা সমস্যা হয়েছে...",
          showConfirmButton: true,
        });
      }
    })
    .catch(function (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `${error.message}`,
        showConfirmButton: true,
      });
    });
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl capitalize text-center font-extrabold pb-8">
          নতুন ইভেন্ট যোগ করুন
        </h1>
        <form onSubmit={handleSubmit} className="lg:flex gap-8">
          <div className="flex flex-col lg:w-1/2">
            <input
              type="text"
              name="featuredImage"
              className="input input-bordered mb-4"
              placeholder="পরবর্তী বই চক্রের কভার ছবির লিংক"
              value={formData.featuredImage}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="eventTitle"
              className="input input-bordered mb-4"
              placeholder="পরবর্তী বই চক্রের নাম"
              value={formData.eventTitle}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="speakers.name"
              className="input input-bordered mb-4"
              placeholder="অতিথী বক্তার নাম"
              value={formData.speakers.name}
              onChange={handleChange}
              required
            />
            <textarea
              name="speakers.details"
              className="input input-bordered mb-4"
              placeholder="অতিথী বক্তার বিবরণ"
              value={formData.speakers.details}
              onChange={handleChange}
            ></textarea>
            <textarea
              name="description"
              className="input input-bordered mb-4"
              placeholder="বইচক্রের বিস্তারিত"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
            <label className="mb-2">ইভেন্টের এজেন্ডা</label>
            {formData.agenda.map((step, index) => (
              <div key={index} className="flex items-center mb-4">
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder={`এজেন্ডা ধাপ ${index + 1}`}
                  value={step}
                  onChange={(e) => handleAgendaChange(index, e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="btn rounded-none bg-basic btn-error ml-2"
                  onClick={() => removeAgendaStep(index)}
                >
                  মুছুন
                </button>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-secondary mb-4"
              onClick={addAgendaStep}
            >
              Add Agenda Step
            </button>
            <label className="mb-2">পরবর্তী ইভেন্টের তারিখ</label>
            <input
              type="datetime-local"
              name="dateTime"
              className="input input-bordered mb-4"
              placeholder="পরবর্তী ইভেন্টের তারিখ"
              value={formData.dateTime}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col lg:w-1/2">
            <input
              type="text"
              name="location.physicalLocation"
              className="input input-bordered mb-4"
              placeholder="শারীরিক অবস্থান"
              value={formData.location.physicalLocation}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="location.virtualLocation"
              className="input input-bordered mb-4"
              placeholder="ভার্চুয়াল অবস্থান"
              value={formData.location.virtualLocation}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="location.liveMap"
              className="input input-bordered mb-4"
              placeholder="গুগল লোকেশন লিংক"
              value={formData.location.liveMap}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="costOrFees"
              className="input input-bordered mb-4"
              placeholder="রেজিস্ট্রেশন ফি (যদি ফ্রি হয় তাহলে ০ বসান)"
              value={formData.costOrFees}
              onChange={handleChange}
              required
            />
            <label className="mb-2">রেজিস্ট্রেশন ডেডলাইন</label>
            <input
              type="datetime-local"
              name="registrationDeadline"
              className="input input-bordered mb-4"
              value={formData.registrationDeadline}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="featuredBook"
              className="input input-bordered mb-4"
              placeholder="আলোচ্য বই"
              value={formData.featuredBook}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="userEmail"
              className="input input-bordered mb-4"
              defaultValue={user.email}
              readOnly
            />
            <input
              type="text"
              name="userName"
              className="input input-bordered mb-4"
              defaultValue={user.displayName}
              readOnly
            />
            <button type="submit" className="btn rounded-none bg-second text-[16px] font-bold text-basic btn-primary self-center w-full">
              ইভেন্ট যোগ করুন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvents;
