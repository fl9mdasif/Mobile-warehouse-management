import React from 'react';
import CountUpDiv from '../../../CountUP/CountUp';
import Reviews from '../../Reviewes/Reviews';
import Banar from '../Banar/Banar';
import Products from '../Products/Products';



const Home = () => {
    return (
        <div>
            <Banar></Banar>
            <Products></Products>
            <CountUpDiv></CountUpDiv>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;