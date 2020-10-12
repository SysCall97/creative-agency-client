import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <section className="mr-0" style={{backgroundColor:"#FBD062", borderBottomRightRadius:"30%"}}>
            <Navbar />
            <HeaderMain />
        </section>
    );
};

export default Header;