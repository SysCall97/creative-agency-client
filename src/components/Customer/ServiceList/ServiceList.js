import React from 'react';
import Leftbar from '../../Leftbar/Leftbar';
import Topbar from '../../Topbar/Topbar';

const ServiceList = () => {
    document.title = 'Service List';
    return (
        <div className="d-flex vh-100" style={{backgroundColor:"#E5E5E5"}}>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2  pt-4 bg-white h-100">
                <Leftbar active='serviceList' />
            </div>
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 pl-0 pr-0">
                <Topbar />
                {/* orders */}
            </div>
        </div>
    );
};

export default ServiceList;