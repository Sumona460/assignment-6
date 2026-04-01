import React, {  use, useState } from 'react';

import { FaFileAlt } from 'react-icons/fa'; 
import image from '../../assets/products/design-tool.png'
import ToggleButtons from './ToggleBtn'

const FirstCard = ({cardsPromise,  handleAddToCart}) => {
    const cards = use(cardsPromise)
    console.log(cards);

  

     const [addedItems, setAddedItems] = useState([]); 

     const handleClick = (card) => {
  handleAddToCart(card);

  if (addedItems.includes(card.id)) {
    // REMOVE
    setAddedItems(addedItems.filter(id => id !== card.id));
  } else {
    // ADD
    setAddedItems([...addedItems, card.id]);
  }
};

    return (
        <>
        <div>
            <h2 className='text-5xl text-center font-bold mt-28'>Premium Digital Tools</h2>
            <p className='text-center'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
          
            <ToggleButtons/>
        </div>

        <div className='grid md:grid-cols-3 container mx-auto mb-7'>
{cards.map(card => <div key={card.id} className=''>


    <div className="card  w-87 bg-base-100 shadow-sm mb-7 space-y-3 container mx-auto">
  <div key={card.id} className="card-body">
    <div className='flex justify-between'> 
<img src={image} alt="" />
    <span className="badge badge-xs badge-warning">{card.tag}</span>
    </div>
    <div className="">
      <h2 className="text-3xl font-bold">{card.name}</h2>
      <p>{card.description}</p>
     

      <span className="text-xl font-semibold">${card.price}/{card.period}</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{card.features}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Batch processing capabilities</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>AI-driven image enhancements</span>
      </li>
     
    </ul>
    <div className="mt-6">
      <button
  onClick={() => handleClick(card)}
  className={`btn rounded-full btn-block ${
    addedItems.includes(card.id)
      ? "btn-success"
      : "btn-primary"
  }`}
>
  {addedItems.includes(card.id) ? "Added" : "Buy Now"}
</button>
    </div>
  </div>
</div>


</div>)}
</div>
      </>
    );
};

export default FirstCard;


