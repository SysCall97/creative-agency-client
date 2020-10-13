import React from 'react';

const ShowServiceCard = (props) => {
    const { name, description, img } = props.service;
    return (
        <div className="card mr-4 shadow mt-4 col-md-3" style={{borderRadius:"20px"}}>
            <div className="d-flex justify-content-center mt-4">
                <img className="card-img-top img-fluid" style={{width:"20%"}} src={img} alt="" />
            </div>

            <div className="card-body text-center">
                <h5 className="card-title font-weight-bolder">{name}</h5>
                <div className="card-title">{description}</div>
            </div>
        </div>
    );
};

export default ShowServiceCard;