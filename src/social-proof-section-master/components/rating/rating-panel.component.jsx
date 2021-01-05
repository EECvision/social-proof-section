import React from 'react';
import iconUrl from '../../images/icon-star.svg'

const RatingPanel =({extendBy, count, category})=>{

    let arr = [];
    for(let i=0; i<count; i++){
        arr.push(iconUrl)
    }
    return (
        <div className={`w-5/6 max-w-lg flex flex-col items-center md:flex-row md:justify-between my-2 md:mr-${extendBy} bg-pink-100`}>
            <div className="w-2/5 flex justify-evenly items-center">
                {
                    arr.map( iUrl => (
                        <img key={Math.random()} src={iUrl} alt="star"/>
                    ))
                }
            </div>
            <div className="md:w-3/5 w-full text-center text-pink-900 font-bold opacity-75 px-4 py-2 ">Rated {count} stars in {category} </div>
        </div>
    )
}

export default RatingPanel;