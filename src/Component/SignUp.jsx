import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const SignUp = () => {

  const { createUser } = useContext(AuthContext);

  const handleSignUp = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log('form sign up', email, password);
    createUser(email, password)
      .then(result => {
        console.log(result.user);
        const createAt = result?.user?.metadata?.creationTime;
        const newUser = { name, email, createAt }
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
          .then(res => res.json())
          .then(data => {
            console.log('User created to the Database server', data);
            if (data.insertedId) {
              Swal.fire({
                title: "Successfully",
                text: "User sign up is successful",
                icon: "success"
              });
            }
          })
      })
      .catch(error => {
        console.log('ERROR', error);
      })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now !!!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Enter your name" name='name' className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="Enter your email" name='email' className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="Enter your password" name='password' className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p>Create a account. please: <Link to="/signIn" className='text-blue-500 underline'>Login/Sign In</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;