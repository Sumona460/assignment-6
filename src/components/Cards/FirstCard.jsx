import React, { use } from 'react';

const FirstCard = ({cardsPromise}) => {
    const cards = use(cardsPromise)
    console.log(cards);
    return (
        <div>
            <h2 className='text-3xl font-semibold '>Premium Digital Tools</h2>
            <p>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
        </div>
    );
};

export default FirstCard;


