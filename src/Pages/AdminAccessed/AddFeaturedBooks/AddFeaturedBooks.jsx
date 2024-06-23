import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AddFeaturedBooks = () => {
  const axiosSecure=useAxiosSecure()
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    axiosSecure.post('/featured-book', data)
    .then(function (response) {
      if (response.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: " বই যোগ করা হয়েছে !! ",
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-extrabold capitalize text-center pb-8">ফিচার্ড বই যোগ করুন</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="lg:flex gap-8">
        <div className="flex flex-col lg:w-1/2">
          <label className="mb-2">বইয়ের নাম</label>
          <input
            type="text"
            name="bookName"
            {...register('bookName', { required: true })}
            className="input input-bordered mb-4"
            placeholder="বইয়ের নাম লিখুন"
          />
          {errors.bookName && <span className="text-red-500">বইয়ের নাম আবশ্যক</span>}
          
          <label className="mb-2">বইয়ের ছবি URL</label>
          <input
            type="text"
            name="bookImage"
            {...register('bookImage', { required: true })}
            className="input input-bordered mb-4"
            placeholder="বইয়ের ছবি URL লিখুন"
          />
          {errors.bookImage && <span className="text-red-500">বইয়ের ছবি URL আবশ্যক</span>}
          
          <label className="mb-2">লেখকের নাম</label>
          <input
            type="text"
            name="authorName"
            {...register('authorName', { required: true })}
            className="input input-bordered mb-4"
            placeholder="লেখকের নাম লিখুন"
          />
          {errors.authorName && <span className="text-red-500">লেখকের নাম আবশ্যক</span>}
          
          <button type="submit" className="btn btn-primary self-center w-full">
            বই যোগ করুন
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFeaturedBooks;
