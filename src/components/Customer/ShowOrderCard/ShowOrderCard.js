import React from 'react';

const ShowOrderCard = (props) => {
    const { serviceName, status } = props.order;
    const services = JSON.parse(sessionStorage.services);
    const service = services.find(s => s.name === serviceName);
    const { description, image } = service;

    return (
        <div className="card mr-4 shadow mt-4 col-lg-3 col-md-6 col-sm-4" style={{ borderRadius: "20px" }}>
            <div className="d-flex justify-content-between align-items-center mt-4">
                <img className="card-img-top img-fluid" style={{ width: "20%" }} src={`data:image/png;base64,${image.img}`} alt="" />
                {
                    status === 'pending' ? 
                    <button className="btn-pending">Pending</button> :
                    status === 'done' ? 
                    <button className="btn-done">Done</button> :
                    <button className="btn-onGoing">On Going</button>
                }
            </div>

            <div className="card-body">
                <h5 className="card-title font-weight-bolder">{serviceName}</h5>
                <div className="card-title">{description}</div>
            </div>
        </div>
    );
};

export default ShowOrderCard;