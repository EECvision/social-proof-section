import React from 'react';
import TestimonySection from './social-proof-section-master/components/testimony/testimony-section.component';
import RatingSection from './social-proof-section-master/components/rating/rating-section.component';
import BuyerSection from './social-proof-section-master/components/buyer/buyer-section.component';

const App =()=>{
    return(
        <div className="flex flex-col items-center justify-center w-full mt-10 mb-24 px-2 sm:px-24">
            <div className="w-full flex flex-col items-center md:flex-row justify-between mb-12">
                <TestimonySection/>
                <RatingSection/>
            </div>
            <BuyerSection/>
        </div>
    )
}

export default App;
