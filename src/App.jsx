import './App.css'
import logo from './assets/logo1.png'
import logo1 from './assets/1.png'
import logo2 from './assets/2.png'
import logo3 from './assets/3.png'
import logo4 from './assets/4.png'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './Component/CoffeeCard'

function App() {

  const coffees = useLoaderData();

  return (
    <>
      <div className='w-11/12 mx-auto'>
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
        <div>
          <h2>Total Coffee Data : {coffees.length}</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {
              coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
