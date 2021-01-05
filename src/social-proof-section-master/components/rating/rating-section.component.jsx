import React,{useState} from 'react';

import {Rating} from './rating-data';
import RatingPanel from './rating-panel.component';

const RatingSection =()=>{
    const [Ratings,] = useState(Rating);

    return (
        <div className="w-full md:w-3/5 flex flex-col items-center md:items-end justify-center">
            {
                Ratings.map(({id, ...otherProps})=>{
                    return(
                        <RatingPanel key={id} {...otherProps}/>
                    )
                })
            }
        </div>
    )
}

export default RatingSection;