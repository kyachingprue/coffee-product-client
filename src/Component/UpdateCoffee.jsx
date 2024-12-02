import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {

  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  return (
    <div>
      <h3>This is Update Coffee:{name}</h3>
    </div>
  );
};

export default UpdateCoffee;