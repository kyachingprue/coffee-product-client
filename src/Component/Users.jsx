import React, { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleUserDelete = id => {
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

        //delete from the database 
        fetch(`http://localhost:5000/users/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log('Deleted your data', data)
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            const remainingUsers = users.filter(user => user._id !== id);
            setUsers(remainingUsers);
          })
      }
    });
  }
  return (
    <div className='w-10/12 mx-auto my-10'>
      <h3>This is Users Collection: {users.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>CreateAt</th>
              <th>Last Login At</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {/* row 2 */}
            {/* row 3 */}
            {
              users.map(user => <tr key={user._id}>
                <th>1</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createAt}</td>
                <td>{user.lastSignInTime}</td>
                <td>
                  <button className='btn bg-orange-50 rounded-full'><FaPencilAlt className='text-xl' /></button>
                  <button onClick={() => handleUserDelete(user._id)} className='btn bg-red-400 rounded-full'><MdDelete className='text-xl' /></button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;