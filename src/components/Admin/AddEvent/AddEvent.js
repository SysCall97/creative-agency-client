import React from 'react';
import { useState } from 'react';

const AddEvent = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleOnSubmit = e => {
        console.log(info);
        // const formData = new FormData();
        // formData.append('name', info.name);
        // formData.append('description', info.description);
        // formData.append('file', file);

        // fetch('http://localhost:5000/addService', {
        //     method: 'POST',
        //     body: formData
        // })

        // fetch('http://localhost:5000/addOrder', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(info)
        // })
        // .then(res => res.json())
        // .then(data => console.log(data));

        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data => alert(data));
        e.preventDefault();
    }
    
    const handleOnBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileUpload = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="name" placeholder="name" onBlur={handleOnBlur} /> <br/>
                <input type="text" name="designation" placeholder="designation" onBlur={handleOnBlur} /> <br/>
                <input type="text" name="description" placeholder="description" onBlur={handleOnBlur} /> <br/>
                <input type="text" name="img" placeholder="url" onBlur={handleOnBlur} /> <br/>
                {/* <input type="file" id="img" onChange={handleFileUpload} /> <br/> */}
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvent;