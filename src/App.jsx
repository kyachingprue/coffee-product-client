import './App.css'
import logo from './assets/logo1.png'
import logo1 from './assets/1.png'
import logo2 from './assets/2.png'
import logo3 from './assets/3.png'
import logo4 from './assets/4.png'
import { NavLink, useLoaderData } from 'react-router-dom'
import CoffeeCard from './Component/CoffeeCard'
import { useState } from 'react'

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <div className='w-11/12 mx-auto'>
        <div className="navbar bg-slate-500">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/addCoffee'}>AddCoffee</NavLink></li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Espresso Emporium</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-3 text-white gap-3">
              <li><NavLink to={'/'}>Home</NavLink></li>
              <li><NavLink to={'/addCoffee'}>AddCoffee</NavLink></li>
              <li><NavLink to={'/signIn'}>Login</NavLink></li>
              <li><NavLink to={'/users'}>Users</NavLink></li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
        <div
          className="hero"
          style={{
            backgroundImage: "url(https://i.ibb.co.com/10WWJ50/7.png)",
          }}>
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="flex justify-center items-center gap-3">
              <img className='w-16' src={logo} alt="" />
              <h1 className=" text-4xl font-bold">Espresso Emporium</h1>
            </div>
          </div>
        </div>
        <div
          className="hero w-full min-h-screen"
          style={{
            backgroundImage: "url(https://i.ibb.co.com/Cw3ZP4w/6.jpg)",
          }}>
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content">
            <div className="text-left mr-60">
              <h1 className="mb-5 text-4xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
              <p className="mb-5">
                It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full bg-[#ECEAE3]'>
          <div className='flex justify-center w-10/12 gap-5 mx-auto items-center'>
            <div className='my-7'>
              <img src={logo1} alt="" />
              <div className='space-y-2 mt-4'>
                <h4 className='text-2xl font-bold'>Awesome Aroma</h4>
                <p className='text-gray-500'>You will definitely be a fan of the design & aroma of your coffee</p>
              </div>
            </div>
            <div className='my-7'>
              <img src={logo2} alt="" />
              <div className='space-y-2 mt-4'>
                <h4 className='text-2xl font-bold'>High Quality</h4>
                <p className='text-gray-500'>We served the coffee to you maintaining the best quality</p>
              </div>
            </div>
            <div className='my-7'>
              <img src={logo3} alt="" />
              <div className='space-y-2 mt-4'>
                <h4 className='text-2xl font-bold'>Pure Grades</h4>
                <p className='text-gray-500'>The coffee is made of the green coffee beans which you will love</p>
              </div>
            </div>
            <div className='my-7'>
              <img src={logo4} alt="" />
              <div className='space-y-2 mt-4'>
                <h4 className='text-2xl font-bold'>Proper Roasting</h4>
                <p className='text-gray-500'>Your coffee is brewed by first roasting the green coffee beans</p>
              </div>
            </div>
          </div>
        </div>
        {/* Main section starts */}
        <div className='my-8'>
          <h2 className='text-4xl font-bold py-6 text-center'>Total Coffee Data : {coffees.length}</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {
              coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}
                coffees={coffees}
                setCoffees={setCoffees}
              ></CoffeeCard>)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
