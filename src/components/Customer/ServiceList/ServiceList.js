import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Leftbar from '../../Leftbar/Leftbar';
import Topbar from '../../Topbar/Topbar';
import ShowOrderCard from '../ShowOrderCard/ShowOrderCard';

const ServiceList = () => {
    document.title = 'Service List';
    const [orders, setOrders] = useState(null);
    const loggedinUser = JSON.parse(sessionStorage.user);
    const { email } = loggedinUser;

    const services = JSON.parse(sessionStorage.services);

    // console.log(email);

    useEffect(() => {
        fetch('http://localhost:5000/getOrders', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email})
        })
        .then(res => res.json())
        .then(data => {
            const orderInfo = data.map(service => {
                const order = services.find(s => s.name === service.serviceName);
                order['status'] = service.status;
                return order;
            })
            // console.log(orderInfo);
            setOrders(orderInfo);
        })
    }, []);

    return (
        <div className="row d-flex min-vh-100 mw-100" style={{backgroundColor:"#E5E5E5"}}>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2  pt-4 bg-white min-vh-100">
                <Leftbar active='serviceList' />
            </div>
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 pl-0 pr-0">
                <Topbar />
                
                <div className="row mt-3 ml-4 mw-100">
                    {
                        orders === null ? 
                        <div className="spinner-border text-warning" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>:
                        orders.map(order => <ShowOrderCard order={order} key={order._id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceList;