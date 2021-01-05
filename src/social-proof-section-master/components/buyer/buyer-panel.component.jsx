import React from 'react';

import Anne from '../../images/image-anne.jpg';
import Colton from '../../images/image-colton.jpg';
import Irene from '../../images/image-irene.jpg';

const BuyerPanel =({name, category, feedback, imageUrl, extendBy})=>{
    const buyerImages = [Anne, Colton, Irene]
    return (
        <div className={`md:w-2/5 md:max-w-sm mt-4 lg:mb-${extendBy} md:mr-4 rounded-lg py-6 px-8 bg-pink-900`}>
            <div className="flex justify-start items-center">
                <img className="w-10 h-10 rounded-full" src={`${buyerImages[imageUrl]}`} alt="buyers"/>
                <div className="flex flex-col items-center ml-6">
                    <span className="text-white">{name}</span>
                    <span className="text-pink-700">{category}</span>
                </div>
            </div>
            <div className="mt-6 text-white">"{feedback}"</div>
        </div>
    )
}

export default BuyerPanel;