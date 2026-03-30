import React from 'react';
import bannerImg from '../../../public/banner.png'
import { FaPlay } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";

console.log(bannerImg);
const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img  className="max-w-sm rounded-lg shadow-2xl"
      src="/public/banner.png" alt='banner'
     
    />
    <div>
        <span className='bg-blue-100 p-1 rounded-full text-[14px] text-blue-600 '> <span className='inline-block border-3   rounded-full border-blue-300'><FaDotCircle /></span> New: AI-Powered Tools Available</span>
      <h1 className="text-7xl font-bold md:mr-30">Supercharge Your <br /> Digital Workflow</h1>
      <p className="py-6">
        Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place. Start creating faster today. <br />
Explore Products
      </p>
      
        <button className="btn btn-primary rounded-full mr-3">Explore Products</button>

      <button className="btn btn-outline rounded-full text-blue-400 border-blue-400"><FaPlay />
        Watch Video</button>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;