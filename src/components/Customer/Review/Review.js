import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { userContext } from '../../../App';
import Leftbar from '../../Leftbar/Leftbar';
import Topbar from '../../Topbar/Topbar';

const Review = () => {
    document.title = 'Review';
    const history = useHistory();
    const user = JSON.parse(sessionStorage.user);

    if(user.isAdmin) history.push('/admin/serviceList');


    const [review, setReview] = useState({
        name: user.displayName,
        img: user.photoURL
    })
    const handleOnBlur = e => {
        const updateReview = {...review};
        updateReview[e.target.name] = e.target.value;
        setReview(updateReview);
    }
    const handleOnSubmit = e => {
        console.log(review);
        fetch('https://murmuring-journey-21904.herokuapp.com/addReview', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(isAdded => {
            if(isAdded) {
                alert('Review added!');
                history.push('/');
            }
        });
        
        e.preventDefault();
    }
    return (
        <div className="row d-flex min-vh-100 mw-100" style={{backgroundColor:"#E5E5E5"}}>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2  pt-4 bg-white min-vh-100">
                <Leftbar active='review' />
            </div>
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 pl-0 pr-0">
                <Topbar />
                <div className="mt-3 ml-3">
                    <form onSubmit={handleOnSubmit}>
                        <input className="w-75 mb-1 ml-1" style={{ height: "40px", border: "none", borderRadius: "5px", paddingLeft: "10px" }} type="text" name="name" value={user.displayName}  readOnly/> <br />

                        <input className="w-75 mb-1 ml-1" style={{ height: "40px", border: "none", borderRadius: "5px", paddingLeft: "10px" }} type="text" name="designation" placeholder="Company’s name, Designation" onBlur={handleOnBlur} required /> <br />

                        <textarea className="w-75 m-1" style={{ border: "none", borderRadius: "5px", paddingLeft: "10px" }} name="feedback" rows="8" cols="50" placeholder="feedback" onBlur={handleOnBlur} required></textarea> <br />

                        <input type="submit" className="btn-brand" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;