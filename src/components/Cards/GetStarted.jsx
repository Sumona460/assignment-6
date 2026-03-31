import React from 'react';
import assets from '/user.png'
import img from '/rocket.png'
import img2 from '/package.png'

const GetStarted = () => {
    return (
        <div className='bg-gray-50  '>
            <div className='text-center  p-15'>
                <h2 className='text-5xl font-bold'>Get Started in 3 Steps</h2>
            <p className='text-gray-400'>Start using premium digital tools in minutes, not hours.</p>
            </div>
<section className='grid md:grid-cols-3 items-center justify-center container mx-auto'>
    {/* card 1 */}
     <div className="card bg-base-100 w-70 h-68 shadow-sm my-7">
  <div className="card-body text-center  items-center">
    <p className='bg-purple-700 text-amber-50 rounded-full p-2 ml-50 h-10 w-10'>01</p>
   <div className='bg-purple-200 rounded-full p-3'>
     <img src="/public/user.png" alt="" />
   </div>
    <h2 className=" text-center text-2xl font-semibold">Create Account</h2>
    <p className='text-gray-400'>Sign up for free in seconds. No credit card required to get started.</p>
  </div>
     </div>
     {/* card 2 */}
     <div className="card bg-base-100 w-70 h-68 shadow-sm my-7">
  <div className="card-body text-center  items-center">
    <p className='bg-purple-700 text-amber-50 rounded-full p-2 ml-50 h-10 w-10'>02</p>
   <div className='bg-purple-200 rounded-full p-3'>
     <img src="/public/package.png" alt="" />
   </div>
    <h2 className=" text-center text-2xl font-semibold">Choose Products</h2>
    <p className='text-gray-400'>Browse our catalog and select the tools that fit your needs.</p>
  </div>
     </div>
     {/* card 3 */}
     <div className="card bg-base-100 w-70 h-68 shadow-sm my-7">
  <div className="card-body text-center  items-center">
    <p className='bg-purple-700 text-amber-50 rounded-full p-2 ml-50 h-10 w-10'>03</p>
   <div className='bg-purple-200 rounded-full p-3'>
     <img src="/public/rocket.png" alt="" />
   </div>
    <h2 className=" text-center text-2xl font-semibold">Start Creating</h2>
    <p className='text-gray-400'>Download and start using your premium tools immediately.</p>
  </div>
     </div>
</section>
        </div>
    );
};

export default GetStarted;