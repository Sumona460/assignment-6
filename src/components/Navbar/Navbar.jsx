import React from 'react';
// import ToggleButtons from '../Cards/FirstCard'

const Navbar = ({cartCount = 0}) => {
    return (

       <div className="navbar bg-base-100  container mx-auto flex justify-between text-center items-center">
  <div className="">
    <a className=" text-blue-500 text-2xl font-bold">DigiTools</a>
  </div>

  <div className='text-center flex justify-center items-center'>
    <ul className='flex  gap-8 hidden md:flex'>
       <li><a href="">Products</a></li>
       <li><a href="">Features</a></li>
       <li><a href="">Pricing</a></li>
       <li><a href="">Testimonials</a></li>
       <li><a href="">FAQ</a></li>
    </ul>
  </div>


  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
         <span className="badge badge-sm indicator-item">{cartCount}</span> 
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-180 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">{cartCount} Items</span>
          <div>
               <h2 className='text-3xl text-center font-bold '>Premium Digital Tools</h2>
               <p className='text-center'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>
          
          <div className="card-actions">
            <button className="btn btn-primary rounded-full btn-block">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">

      <a className='font-semibold  mr-3 ml-3 btn btn-ghost rounded-full' href="">Login</a>
     <button className='btn btn-primary rounded-full'>Get Started</button>

    </div>
  </div>
</div>
    );
};

export default Navbar;
