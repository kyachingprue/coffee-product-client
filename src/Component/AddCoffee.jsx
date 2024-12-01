import React from 'react';

const AddCoffee = () => {
  return (
    <div className='w-10/12 mx-auto my-10 bg-[#F4F3F0]'>
      <h3 className='text-center text-2xl font-bold pt-6 text-black'>Add New Coffee</h3>
      <p className='py-4 text-gray-500 w-8/12 mx-auto'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
      <form className='w-10/12 mx-auto'>
        <div className='flex gap-3 mx-auto'>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold text-black">Name</span>
            </div>
            <input type="text" placeholder="Enter Coffee Name" className="input input-bordered w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold text-black">Chef</span>
            </div>
            <input type="text" placeholder="Enter Coffee Chef" className="input input-bordered w-full" />
          </label>
        </div>
        <div className='flex gap-3 mx-auto'>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold text-black">Supplier</span>
            </div>
            <input type="text" placeholder="Enter Coffee Supplier" className="input input-bordered w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold text-black">Taste</span>
            </div>
            <input type="text" placeholder="Enter Coffee Taste" className="input input-bordered w-full" />
          </label>
        </div>
        <div className='flex gap-3 mx-auto'>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold text-black">Category</span>
            </div>
            <input type="text" placeholder="Enter Coffee Category" className="input input-bordered w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold text-black">Details</span>
            </div>
            <input type="text" placeholder="Enter Coffee Details" className="input input-bordered w-full" />
          </label>
        </div>
        <label className="form-control py-4 w-full">
          <div className="label">
            <span className="label-text font-semibold text-black">Photo</span>
          </div>
          <input type="text" placeholder="Enter Photo URL" className="input input-bordered w-full" />
        </label>
        <button className="btn btn-accent my-5 mb-12 w-full rounded-xl">Add Coffee</button>
      </form>
    </div>
  );
};

export default AddCoffee;