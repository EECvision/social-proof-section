import React,{useState} from 'react';
import BuyerPanel from './buyer-panel.component'

import {BUYER_DATA} from './buyer-data';

const BuyerSection =()=>{
    const [buyers,] = useState(BUYER_DATA)
    return (
        <div className='w-full flex flex-col items-center md:flex-wrap lg:flex-no-wrap md:flex-row md:justify-around md:items-end'>
            {
                buyers.map(({id,...otherProps})=>{
                    return(
                        <BuyerPanel key={id} {...otherProps}/>
                    )
                })
            }
        </div>
    )
}

export default BuyerSection;