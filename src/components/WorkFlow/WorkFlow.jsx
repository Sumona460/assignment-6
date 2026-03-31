import React from 'react';

const WorkFlow = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-blue-500 text-primary-content p-10">
  <aside>
    
    <p className="font-bold text-3xl">
      Ready to Transform Your Workflow?
    </p>
    <p>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.
    </p>
  </aside>
  <div className='flex'>
    <button className='btn btn-primary border-amber-50 hover:bg-blue-600 hover:text-amber-50 rounded-full bg-amber-50 text-blue-500'>Explore Products</button>
    <button className="btn btn-outline rounded-full text-amber-50 border-amber-50  btn-primary">View Pricing</button>
  </div>
  <p>14-day free trial • No credit card required • Cancel anytime</p>
</footer>
    );
};

export default WorkFlow;