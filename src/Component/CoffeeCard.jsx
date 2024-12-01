import React from 'react';
import { IoEyeSharp } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CoffeeCard = ({ coffee }) => {
  const { name, chef, supplier, taste, category, details, photo } = coffee;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className='w-80 h-80 mx-auto'>
          <img className='w-full h-full object-cover rounded-xl'
            src={photo}
            alt="Movie" />
        </figure>
        <div className="flex justify-between w-full px-8">
          <div className='pt-12'>
            <h2 className="card-title">{name}</h2>
            <p>{chef}</p>
            <p>{supplier}</p>
            <p>{taste}</p>
            <p>{category}</p>
            <p>{details}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join pt-12 space-y-3 join-vertical">
              <button className="btn bg-orange-200 join-item"><IoEyeSharp className='text-xl text-white' /></button>
              <button className="btn  bg-slate-700 join-item"><FaPen className='text-white' /></button>
              <button className="btn bg-red-500 join-item"><MdDelete className='text-white text-xl' /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
{/* <div className='flex items-center'>
  <button className="btn bg-orange-200"><IoEyeSharp className='text-xl text-white' /></button>
  <button className='btn bg-slate-700'><FaPen className='text-white' /></button>
  <button className='btn bg-red-500'><MdDelete className='text-white text-xl' /></button>
</div> */}