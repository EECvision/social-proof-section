import React from 'react';
import TestimonySection from '../components/testimony/testimony-section.component';
import RatingSection from '../components/rating/rating-section.component';
import BuyerSection from '../components/buyer/buyer-section.component';

const SocialProofSectionPage =()=>{
    return(
        <div className="flex flex-col items-center justify-center w-full mt-10">
            <div className="w-full flex flex-col items-center md:flex-row justify-between mb-12 px-24">
                <TestimonySection/>
                <RatingSection/>
            </div>
            <BuyerSection/>
        </div>
    )
}

export default SocialProofSectionPage;