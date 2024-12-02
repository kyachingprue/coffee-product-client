import React from 'react';
import { IoEyeSharp } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });

  }
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
              <Link to={`updateCoffee/${_id}`} className="btn  bg-slate-700 join-item"><FaPen className='text-white' /></Link>
              <button onClick={() => handleDelete(_id)} className="btn bg-red-500 join-item"><MdDelete className='text-white text-xl' /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
