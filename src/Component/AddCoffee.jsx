import React from 'react';

const AddCoffee = () => {

  const handleAddCoffee = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = { name, chef, supplier, taste, category, details, photo };
    console.log(newCoffee);

    fetch('http://localhost:5000/coffee', {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee)
    })

  }
  return (
    <div className='w-10/12 mx-auto my-10 bg-[#F4F3F0]'>
      <h3 className='text-center text-2xl font-bold pt-6 text-black'>Add New Coffee</h3>
      <p className='py-4 text-gray-500 w-8/12 mx-auto'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
      <form onSubmit={handleAddCoffee} className='w-10/12 space-y-2 mx-auto'>
        <div className='flex gap-3 mx-auto'>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold text-black">Name</span>
            </div>
            <input type="text" placeholder="Enter Coffee Name" name="name" className="input input-bordered w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold text-black">Chef</span>
            </div>
            <input type="text" placeholder="Enter Coffee Chef" name="chef" className="input input-bordered w-full" />
          </label>
        </div>
        <div className='flex gap-3 mx-auto'>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold text-black">Supplier</span>
            </div>
            <input type="text" placeholder="Enter Coffee Supplier" name="supplier" className="input input-bordered w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold text-black">Taste</span>
            </div>
            <input type="text" placeholder="Enter Coffee Taste" name="taste" className="input input-bordered w-full" />
          </label>
        </div>
        <div className='flex gap-3 mx-auto'>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-semibold text-black">Category</span>
            </div>
            <input type="text" placeholder="Enter Coffee Category" name="category" className="input input-bordered w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold text-black">Details</span>
            </div>
            <input type="text" placeholder="Enter Coffee Details" name="details" className="input input-bordered w-full" />
          </label>
        </div>
        <label className="form-control pb-4 w-full">
          <div className="label">
            <span className="label-text font-semibold text-black">Photo</span>
          </div>
          <input type="text" placeholder="Enter Photo URL" name="photo" className="input input-bordered w-full" />
        </label>
        <div className='pb-12 pt-2'>
          <button className="btn btn-accent w-full rounded-xl">Add Coffee</button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;