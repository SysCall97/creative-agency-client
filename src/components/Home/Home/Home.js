import React from 'react';
import Customer from '../Customer/Customer';
import Header from '../Header/Header';

const Home = () => {
    document.title = "Home";

    return (
        <div>
            <Header />
            <Customer />
        </div>
    );
};

export default Home;