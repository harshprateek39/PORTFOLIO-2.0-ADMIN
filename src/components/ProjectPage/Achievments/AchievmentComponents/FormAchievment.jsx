
import React, { useState } from 'react';

import { RxCross2 } from "react-icons/rx";
const AchievmentForm = ({fn})=>{
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    image: '',
    title: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const errors = {};
    if (!formData.title) {
      errors.title = 'Title is required';
    }
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.description) {
      errors.description = 'Description is required';
    }
    if (!formData.startDate) {
      errors.startDate = 'Start Date is required';
    }
    setErrors(errors);
    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // Handle form submission here
      console.log('Form submitted:', formData);
      fn(false);
    }
  };
  return (
    <div  className=' bg-black/80 rounded-md backdrop-blur h-full w-full absolute z-50 overflow-y-auto  text-white flex flex-col '>
    <button type='click' onClick={()=>fn(false)} className=' bg-red-500 text-white  rounded-full font-bold absolute right-2 top-2 text-xl md:text-2xl md:p-1 p-1 '> <RxCross2 className='  '/></button>
    <h1 className=' self-center  md:text-xl font-semibold'> Add New Achievment</h1>
    <form onSubmit={handleSubmit} className=" mx-auto">
    <div className="">
        <label className="block text-gray-500 text-sm font-bold mb-2">Title<sup className=' text-red-500'>*</sup>:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.title && <span className="text-red-500 text-sm">{errors.title}</span>}
      </div>
      <div className="">
        <label className="block text-gray-500 text-sm font-bold mb-2">Name<sup className=' text-red-500'>*</sup>:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
      </div>
      <div className="">
        <label className="block text-gray-500 text-sm font-bold mb-2">Description<sup className=' text-red-500'>*</sup>:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
        {errors.description && <span className="text-red-500 text-sm">{errors.description}</span>}
      </div>
      <div className="">
        <label className="block text-gray-500 text-sm font-bold mb-2">Start Date<sup className=' text-red-500'>*</sup>:</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.startDate && <span className="text-red-500 text-sm">{errors.startDate}</span>}
      </div>
      <div className="">
        <label className="block text-gray-500 text-sm font-bold mb-2">End Date:</label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className=" mb-1">
        <label className="block text-gray-500 text-sm font-bold mb-2">Image:</label>
        <input
          type="file"
          accept="image/*"
          name="image"
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Submit
      </button>
    </form>



     </div>
  )
}

export default AchievmentForm