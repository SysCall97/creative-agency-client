import React from 'react';
import frame from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <section className="row mt-4 pb-5 mw-100 mb-5">
            <div className="col-md-4 ml-5 d-flex flex-column align-items-start justify-content-center">
                <h1 className="text-brand text-highlight">
                    Let’s Grow Your Brand To The Next Level
                </h1>

                <p className="text-brand">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt veniam ut voluptas at quasi ullam dolorum debitis ipsa fugit! Libero?
                </p>

                <button className="btn-brand">Hire Us</button>
            </div>
            <div className="col-md-6 ml-auto mt-5 pr-0 mr-0">
                <img className="img-fluid mr-4" src={frame} alt="" width="80%" />
            </div>
        </section>
    );
};

export default HeaderMain;