import React from 'react';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div  className=''>
            <Banner></Banner>
            <Services></Services>
            <Review></Review>
            
        </div>
    );
};

export default Home;