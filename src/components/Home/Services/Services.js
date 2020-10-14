import React, { useContext } from 'react';
import { useEffect } from 'react';
import { userContext } from '../../../App';
import { useState } from 'react';
import ShowServiceCard from '../ShowServiceCard/ShowServiceCard';

const Services = () => {
    // const [services, setServices] = useState([]);

    const { servicesContext } = useContext(userContext);
    const [services, setServices] = servicesContext;

    useEffect(() => {
        fetch('http://localhost:5000/getAllServices')
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem('services', JSON.stringify(data));
                setServices(data)
            });
    }, []);

    return (
        <div className="mt-4 mb-4 pt-4 pb-4">
            <h2 className="text-center font-weight-bolder pt-4 pb-4">Provide awesome <span style={{ color: "#7AB259" }}>services</span></h2>
            <div className="row d-flex justify-content-center mw-100 pt-4 pb-4">
                {
                    services.length > 0 ?
                        services.map(service => <ShowServiceCard service={service} key={service._id} />)
                        : <h4 className="text-center">Loading...</h4>
                }
            </div>
        </div>
    );
};

export default Services;