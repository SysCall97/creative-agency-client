import React from 'react';

const ShowOrderCard = (props) => {
    const { name, description, _id, status } = props.order;
    return (
        <div className="card mr-4 shadow mt-4 col-md-3" style={{ borderRadius: "20px" }}>
            <div className="d-flex justify-content-between align-items-center mt-4">
                <img className="card-img-top img-fluid" style={{ width: "20%" }} src={`data:image/png;base64,${props.order.image.img}`} alt="" />
                {
                    status === 'pending' ? 
                    <button className="btn-pending">Pending</button> :
                    status === 'done' ? 
                    <button className="btn-done">Done</button> :
                    <button className="btn-onGoing">On Going</button>
                }
            </div>

            <div className="card-body">
                <h5 className="card-title font-weight-bolder">{name}</h5>
                <div className="card-title">{description}</div>
            </div>
        </div>
    );
};

export default ShowOrderCard;