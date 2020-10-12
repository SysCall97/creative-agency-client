import React from 'react';
import Header from '../Header/Header';

const Home = () => {
    document.title = "Home";

    return (
        <div>
            <Header />
        </div>
    );
};

export default Home;