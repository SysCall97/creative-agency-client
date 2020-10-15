import React from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Leftbar from '../../Leftbar/Leftbar';
import Topbar from '../../Topbar/Topbar';

const Order = () => {
    document.title = 'Order';
    const { id } = useParams();
    const history = useHistory()

    let service = JSON.parse(sessionStorage.services).find(s => s._id === id);
    if (service === undefined) service = { name: "" };
    const user = JSON.parse(sessionStorage.user);

    const [orderDetails, setOrderDetails] = useState({
        name: user.displayName,
        email: user.email,
        serviceName: service.name
    });
    const [file, setFile] = useState(null);

    const handleOnChange = e => {
        let newOrderDetails = { ...orderDetails };
        newOrderDetails[e.target.name] = e.target.value;
        setOrderDetails(newOrderDetails);

    }

    const handleOnBlur = e => {
        let insert = true;
        if (e.target.name === 'serviceName') {
            const services = JSON.parse(sessionStorage.services);
            const isServiceAvailbale = services.find(service => service.name === e.target.serviceName);
            if (isServiceAvailbale === undefined) {
                alert('This service is not available');
                document.getElementById('serviceName').defaultValue = service.name;
                insert = false;
            }
        }
        if (insert) {
            let newOrderDetails = { ...orderDetails };
            newOrderDetails[e.target.name] = e.target.value;
            setOrderDetails(newOrderDetails);
        }
    }

    const handleFileUpload = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleOnSubmit = e => {
        if (orderDetails.serviceName === "") {
            alert('Please enter the exact service name');
        } else {
            const formData = new FormData();
            formData.append('clientName', orderDetails.name);
            formData.append('clientEmail', orderDetails.email);
            formData.append('serviceName', orderDetails.serviceName);
            formData.append('projectDetails', orderDetails.projectDetails);
            formData.append('price', orderDetails.price);
            formData.append('file', file);

            fetch('http://localhost:5000/placeOrder', {
                method: 'POST',
                body: formData
            })
            .then(res => res.json())
            .then(isInserted => {
                if(isInserted) history.push('/');
                else alert("Order didn't placed. Try later");
            });

            // console.log(formData);
        }
        e.preventDefault();
    }

    return (
        <div className="row d-flex min-vh-100 mw-100" style={{ backgroundColor: "#E5E5E5" }}>
            <div className="col-xs-1 col-sm-1 col-md-2 col-lg-2 col-xl-2  pt-4 bg-white min-vh-100">
                <Leftbar active='order' />
            </div>
            <div className="col-xs-11 col-sm-11 col-md-10 col-lg-10 col-xl-10 pl-0 pr-0">
                <Topbar />
                <div className="m-3">
                    <form onSubmit={handleOnSubmit}>
                        <input className="w-75 mb-1 ml-1" style={{ height: "40px", border: "none", borderRadius: "5px", paddingLeft: "10px" }} type="text" name="name" defaultValue={user.displayName} onChange={handleOnChange} required /> <br />

                        <input className="w-75 mb-1 ml-1" style={{ height: "40px", border: "none", borderRadius: "5px", paddingLeft: "10px" }} type="email" name="email" defaultValue={user.email} onChange={handleOnChange} required /> <br />

                        <input className="w-75 mb-1 ml-1" style={{ height: "40px", border: "none", borderRadius: "5px", paddingLeft: "10px", backgroundColor: "white" }} type="text" name="serviceName" id="serviceName" defaultValue={service.name} onBlur={handleOnBlur} required /> <br />

                        <textarea className="w-75 m-1" style={{ border: "none", borderRadius: "5px", paddingLeft: "10px" }} name="projectDetails" rows="8" cols="50" placeholder="project details" onChange={handleOnChange} required></textarea> <br />

                        <input className="w-50 mb-1 ml-1" style={{ height: "40px", border: "none", borderRadius: "5px", paddingLeft: "10px", backgroundColor: "white" }} type="text" name="price" placeholder="Price" onChange={handleOnChange} required /> <br />

                        <input className="w-25 mb-1 ml-1" style={{ height: "40px", border: "none", borderRadius: "5px", paddingLeft: "10px" }} type="file" onChange={handleFileUpload} required /> <br />

                        <input type="submit" className="btn-brand" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Order;