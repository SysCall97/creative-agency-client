import React from 'react';
import { useState } from 'react';
import Leftbar from '../../Leftbar/Leftbar';
import Topbar from '../../Topbar/Topbar';

const MakeAdmin = () => {
    document.title = 'Make Admin';
    const [email, setEmail] = useState({});

    const handleOnChange = e => {
        const newEmail = {...email};
        newEmail[e.target.name] = e.target.value;
        setEmail(newEmail);
    }
    const handleOnSubmit = e => {
        

        fetch('http://localhost:5000/makeAdmin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(email)
        })
        .then(res => res.json())
        .then(isOperation => {
            if(isOperation) {
                alert('Added as admin');
            }
        });
        e.preventDefault();
    }
    return (
        <div className="row d-flex min-vh-100 mw-100" style={{ backgroundColor: "#E5E5E5" }}>
            <div className="col-xs-1 col-sm-1 col-md-2 col-lg-2 col-xl-2  pt-4 bg-white min-vh-100">
                <Leftbar active='makeAdmin' />
            </div>
            <div className="col-xs-11 col-sm-11 col-md-10 col-lg-10 col-xl-10 pl-0 pr-0">
                <Topbar />

                <div className="m-3 p-4 bg-white rounded-lg">
                    <form onSubmit={handleOnSubmit}>
                        <label className="font-weight-bolder m-1">Email</label><br/>
                        <input className="w-75 mb-1 ml-1" style={{ height: "40px", border: "1px solid lightgray", borderRadius: "5px", paddingLeft: "10px" }} type="email" name="email" onChange={handleOnChange} placeholder="example@email.com" required /> <br />
                        <button className="btn btn-success m-1">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;