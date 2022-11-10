import React, { useEffect, useState } from 'react';
import useTitle from '../../../Hook/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useTitle('Services');
  

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
        .then(data=>setServices(data))
    }, [])
    
    return (
        <div className='my-8'>
            <h1 className='text-6xl text-slate-900 font-extrabold text-center p-4'>My Services</h1> 
            <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                  {
                services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            }

          </div>
        </div>
    );
};

export default Services;