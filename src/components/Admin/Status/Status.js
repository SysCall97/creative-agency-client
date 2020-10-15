import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Status = (props) => {
    const [status, setStatus] = useState(props.status);

    const updateProjectStatus = (newStatus) => {
        const order = { newStatus };
        const id = props.id;
        fetch(`https://murmuring-journey-21904.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(order)
        })
        .then(res => res.json)
        .then(isUpdated => {
            if(isUpdated) setStatus(newStatus);
            else alert("Update failed. Try larter");
        });
    }

    return (
        <div>
            {
                status === 'pending' &&
                <div className="btn-group">
                    <button type="button" className="btn text-danger dropdown-toggle btn-outline-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Pending
                                            </button>
                    <div className="dropdown-menu dropdown-menu-right">
                        <button className="dropdown-item text-warning btn-outline-light" onClick={() => updateProjectStatus('onGoing')} type="button">On going</button>
                        <button className="dropdown-item text-success btn-outline-light" onClick={() => updateProjectStatus('done')} type="button">Done</button>
                    </div>
                </div>
            }
            {
                status === 'onGoing' &&
                <div className="btn-group">
                    <button type="button" className="btn text-warning dropdown-toggle btn-outline-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        On Going
                                            </button>
                    <div className="dropdown-menu dropdown-menu-right">
                        <button className="dropdown-item text-success btn-outline-light" onClick={() => updateProjectStatus('done')} type="button">Done</button>
                        <button className="dropdown-item text-danger btn-outline-light" onClick={() => updateProjectStatus('pending')} type="button">Pending</button>
                    </div>
                </div>
            }

            {
                status === 'done' &&
                <div className="btn-group">
                    <button type="button" className="btn text-success dropdown-toggle btn-outline-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Done
                                            </button>
                    <div className="dropdown-menu dropdown-menu-right">
                        <button className="dropdown-item text-danger btn-outline-light" onClick={() => updateProjectStatus('pending')} type="button">Pending</button>
                        <button className="dropdown-item text-warning btn-outline-light" onClick={() => updateProjectStatus('onGoing')} type="button">On Going</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Status;