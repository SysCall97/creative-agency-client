import React, { useState } from 'react';
import Leftbar from '../../Leftbar/Leftbar';
import Topbar from '../../Topbar/Topbar';

const AddService = () => {
    document.title = 'Add Service';

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleOnBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileUpload = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleOnSubmit = e => {
        const formData = new FormData();
        formData.append('name', info.name);
        formData.append('description', info.description);
        formData.append('file', file);

        console.log(formData);

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(isAdded => {
            if(isAdded) alert('New service added!');
        })

        e.preventDefault();
    }

    return (
        <div className="row d-flex min-vh-100 mw-100" style={{ backgroundColor: "#E5E5E5" }}>
            <div className="col-xs-1 col-sm-1 col-md-2 col-lg-2 col-xl-2  pt-4 bg-white min-vh-100">
                <Leftbar active='addService' />
            </div>
            <div className="col-xs-11 col-sm-11 col-md-10 col-lg-10 col-xl-10 pl-0 pr-0">
                <Topbar />

                <div className="m-3 p-4 bg-white rounded-lg">
                    <form onSubmit={handleOnSubmit}>
                        <label className="font-weight-bolder m-1">Service Title</label><br/>
                        <input className="w-75 mb-1 ml-1" style={{ height: "40px", border: "1px solid lightgray", borderRadius: "5px", paddingLeft: "10px" }} type="text" name="name" placeholder="Title" onBlur={handleOnBlur} required /> <br />

                        <label className="font-weight-bolder m-1">Desctiption</label><br/>
                        <textarea className="w-75 m-1" style={{ border: "1px solid lightgray", borderRadius: "5px", paddingLeft: "10px" }} name="description" rows="8" cols="50" placeholder="Description" onBlur={handleOnBlur} required></textarea> <br />

                        <input type="file" style={{border: "1px solid lightgray"}} onChange={handleFileUpload} /> <br/>

                        <button className="btn btn-success m-1">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;