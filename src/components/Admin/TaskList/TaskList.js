import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Leftbar from '../../Leftbar/Leftbar';
import Topbar from '../../Topbar/Topbar';
import Status from './Status/Status';

const TaskList = () => {
    document.title = 'Service List';
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getAllOrders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    return (
        <div className="row d-flex min-vh-100 vw-100" style={{ backgroundColor: "#E5E5E5" }}>
            <div className="col-xs-1 col-sm-1 col-md-2 col-lg-2 col-xl-2  pt-4 bg-white min-vh-100">
                <Leftbar active='serviceList' />
            </div>
            <div className="col-xs-11 col-sm-11 col-md-10 col-lg-10 col-xl-10 pl-0 pr-0">
                <Topbar />

                <div className="table-responsive mw-100 m-3 p-4 bg-white rounded-lg">
                    <table className="table table-borderless table-hover w-100 p-4 ">
                        <thead style={{ backgroundColor: "#F5F6FA", color: "#686868", borderRadius: "15px" }}>
                            <th className="td" scope="col">Name</th>
                            <th className="td" scope="col">Email ID</th>
                            <th className="td" scope="col">Service</th>
                            <th className="td" scope="col">Project Details</th>
                            <th className="td" scope="col">Status</th>
                        </thead>
                        <tbody>
                            {
                                orders &&
                                orders.map(order => <tr>
                                    <td className="td">{order.clientName}</td>
                                    <td className="td">{order.clientEmail}</td>
                                    <td className="td">{order.serviceName}</td>
                                    <td className="td">{order.projectDetails}</td>
                                    <Status status={order.status} id={order._id} key={order._id} />
                                    {/* {
                                        <>
                                            {
                                                order.status === 'pending' &&
                                                <div className="btn-group">
                                                    <button type="button" className="btn text-danger dropdown-toggle btn-outline-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Pending
                                            </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <button className="dropdown-item text-warning btn-outline-light" onClick={() => order.status = 'onGoing'} type="button">On going</button>
                                                        <button className="dropdown-item text-success btn-outline-light" onClick={() => order.status = 'done'} type="button">Done</button>
                                                    </div>
                                                </div>
                                            }
                                            {
                                                order.status === 'onGoing' &&
                                                <div className="btn-group">
                                                    <button type="button" className="btn text-warning dropdown-toggle btn-outline-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        On Going
                                            </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <button className="dropdown-item text-success btn-outline-light" type="button">Done</button>
                                                        <button className="dropdown-item text-danger btn-outline-light" type="button">Pending</button>
                                                    </div>
                                                </div>
                                            }
                                            {
                                                order.status === 'done' &&
                                                <div className="btn-group">
                                                    <button type="button" className="btn text-success dropdown-toggle btn-outline-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Done
                                            </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <button className="dropdown-item text-danger btn-outline-light" type="button">Pending</button>
                                                        <button className="dropdown-item text-warning btn-outline-light" type="button">On Going</button>
                                                    </div>
                                                </div>
                                            }
                                        </>
                                    } */}
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TaskList;