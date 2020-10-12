import React from 'react';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';
import airbnb from '../../../images/logos/airbnb.png';

const Customer = () => {
    return (
        <section className="row mw-100 mt-4 d-flex justify-content-center align-items-center">
            <div className="col-md-2 col-sm-2"><img src={google} className="img-fluid" alt="" width="70%" /></div>
            <div className="col-md-2 col-sm-2"><img src={netflix} className="img-fluid" alt="" width="70%" /></div>
            <div className="col-md-2 col-sm-2"><img src={slack} className="img-fluid" alt="" width="70%" /></div>
            <div className="col-md-2 col-sm-2"><img src={uber} className="img-fluid" alt="" width="70%" /></div>
            <div className="col-md-2 col-sm-2"><img src={airbnb} className="img-fluid" alt="" width="70%" /></div>
        </section>
    );
};

export default Customer;