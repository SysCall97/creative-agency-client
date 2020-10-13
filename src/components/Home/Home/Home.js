import React from 'react';
import Customer from '../Customer/Customer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import WorkDemo from '../WorkDemo/WorkDemo';

const Home = () => {
    document.title = "Home";

    return (
        <div style={{backgroundColor:"#E5E5E5"}}>
            <Header />
            <Customer />
            <Services />
            <WorkDemo />
        </div>
    );
};

export default Home;