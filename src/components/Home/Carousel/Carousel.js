import React from 'react';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';


const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide slides" data-ride="carousel" data-interval="2000">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner d-flex justify-content-center">
                <div className="carousel-item active">
                    <img src={carousel1} className="d-block w-25" height="280px" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={carousel2} className="d-block w-25" height="280px" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={carousel3} className="d-block w-25" height="280px" alt="..." />
                </div>
            </div>
        </div>
    );
};

export default Carousel;