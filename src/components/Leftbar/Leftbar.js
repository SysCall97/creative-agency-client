import React from 'react';
import { Link } from 'react-router-dom';
import brand from '../../images/logos/logo.png';

const Leftbar = (props) => {
    const loggedinUser = JSON.parse(sessionStorage.user);

    const admin = {
        display: loggedinUser.isAdmin ? "block" : "none"
    }

    const user = {
        display: loggedinUser.isAdmin ? "none" : "block"
    }

    const activeText = {
        color: "#009444"
    }
    const inActiveText = {
        color: "#000"
    }
    const active = props.active;
    return (
        <div>
            <div className="mb-4 pb-4">
                <Link to="/home">
                    <img className="img-fluid" src={brand} style={{ width: "80%" }} />
                </Link>
            </div>
            <div style={user}>
                <Link to="/customer/order"  style={{textDecoration:"none"}}>
                    <div className="d-flex justify-content-start align-items-center mb-4 mt-4">
                        <svg width="3em" height="1em" viewBox="0 0 16 16" className="bi bi-cart" fill={active === 'order' ? "#009444" : "#000"} xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" /></svg>
                        <div className="pt-1" style={active === 'order' ? activeText : inActiveText}><h6>Order</h6></div>
                    </div>
                </Link>

                <Link to="/customer/serviceList"  style={{textDecoration:"none"}}>
                    <div className="d-flex justify-content-start align-items-center mb-4 mt-4">
                        <svg width="3em" height="1em" viewBox="0 0 16 16" className="bi bi-hdd" fill={active === 'serviceList' ? "#009444" : "#000"} xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M14 9H2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zM2 8a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2z" />
                            <path d="M5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                            <path fillRule="evenodd" d="M4.094 4a.5.5 0 0 0-.44.26l-2.47 4.532A1.5 1.5 0 0 0 1 9.51v.99H0v-.99c0-.418.105-.83.305-1.197l2.472-4.531A1.5 1.5 0 0 1 4.094 3h7.812a1.5 1.5 0 0 1 1.317.782l2.472 4.53c.2.368.305.78.305 1.198v.99h-1v-.99a1.5 1.5 0 0 0-.183-.718L12.345 4.26a.5.5 0 0 0-.439-.26H4.094z" /></svg>
                        <div className="pt-1" style={active === 'serviceList' ? activeText : inActiveText}><h6>Service list</h6></div>
                    </div>
                </Link>

                <Link to="/customer/review"  style={{textDecoration:"none"}}>
                    <div className="d-flex justify-content-start align-items-center mb-4 mt-4">
                        <svg width="3em" height="1em" viewBox="0 0 16 16" className="bi bi-chat-left-dots" fill={active === 'review' ? "#009444" : "#000"} xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v11.586l2-2A2 2 0 0 1 4.414 11H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /></svg>
                        <div className="pt-1" style={active === 'review' ? activeText : inActiveText}><h6>Review</h6></div>
                    </div>
                </Link>
            </div>

            <div style={admin}>
                <Link to="/admin/serviceList"  style={{textDecoration:"none"}}>
                    <div className="d-flex justify-content-start align-items-center mb-4 mt-4">
                        <svg width="3em" height="1em" viewBox="0 0 16 16" className="bi bi-hdd" fill={active === 'serviceList' ? "#009444" : "#000"} xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M14 9H2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zM2 8a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2z" />
                            <path d="M5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                            <path fillRule="evenodd" d="M4.094 4a.5.5 0 0 0-.44.26l-2.47 4.532A1.5 1.5 0 0 0 1 9.51v.99H0v-.99c0-.418.105-.83.305-1.197l2.472-4.531A1.5 1.5 0 0 1 4.094 3h7.812a1.5 1.5 0 0 1 1.317.782l2.472 4.53c.2.368.305.78.305 1.198v.99h-1v-.99a1.5 1.5 0 0 0-.183-.718L12.345 4.26a.5.5 0 0 0-.439-.26H4.094z" /></svg>
                        <div className="pt-1" style={active === 'serviceList' ? activeText : inActiveText}><h6>Service list</h6></div>
                    </div>
                </Link>

                <Link to="/admin/addService"  style={{textDecoration:"none"}}>
                    <div className="d-flex justify-content-start align-items-center mb-4 mt-4">
                        <svg width="3em" height="1em" viewBox="0 0 16 16" className="bi bi-plus" fill={active === 'addService' ? "#009444" : "#000"} xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                        <div className="pt-1" style={active === 'addService' ? activeText : inActiveText}><h6>Add Service</h6></div>
                    </div>
                </Link>

                <Link to="/admin/makeAdmin"  style={{textDecoration:"none"}}>
                    <div className="d-flex justify-content-start align-items-center mb-4 mt-4">
                        <svg width="3em" height="1em" viewBox="0 0 16 16" className="bi bi-person-plus" fill={active === 'makeAdmin' ? "#009444" : "#000"} xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10zM13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                        </svg>
                        <div className="pt-1" style={active === 'makeAdmin' ? activeText : inActiveText}><h6>Make Admin</h6></div>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default Leftbar;