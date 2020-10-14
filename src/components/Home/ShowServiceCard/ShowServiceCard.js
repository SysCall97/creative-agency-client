import React from 'react';
import { Link } from 'react-router-dom';

const ShowServiceCard = (props) => {
    const { name, description, _id } = props.service;
    return (
        <div className="card mr-4 shadow mt-4 col-md-3" style={{borderRadius:"20px"}}>
            <Link to={`/customer/order/${_id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <div className="d-flex justify-content-center mt-4">
                <img className="card-img-top img-fluid" style={{width:"20%"}} src={`data:image/png;base64,${props.service.image.img}`} alt="" />
            </div>

            <div className="card-body text-center">
                <h5 className="card-title font-weight-bolder">{name}</h5>
                <div className="card-title">{description}</div>
            </div>
        </Link>
        </div>
    );
};

export default ShowServiceCard;