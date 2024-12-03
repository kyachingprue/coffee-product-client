import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignIn = () => {

  const { signInUser } = useContext(AuthContext);

  const handleSignIn = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log('new added', email, password)
    signInUser(email, password)
      .then(result => {
        console.log(result.user)
        const lastSignInTime = result.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime }

        fetch(`http://localhost:5000/users/${email}`, {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(loginInfo)
        })
          .then(res => res.json())
          .then(data => {
            console.log('sign in info update data', data)
            if (data.matchedCount > 0) {
              Swal.fire({
                title: "Good job!",
                text: "Login is Successfully",
                icon: "success"
              });
            }

          })
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name='email' className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name='password' className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>New to coffee drinker: <Link to="/signUp" className='text-blue-500 underline'>Sign Up</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;