import React, { useEffect, useState } from "react";
import useTitle from '../../../Hook/useTitle';
import Services from '../Services/Services';
import { Link } from "react-router-dom";
import Slider from '../Slider/Slider';
import ServiceCard from "../Services/ServiceCard";

const Home = () => {
    useTitle('Home');
    const [services, setServices] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/services")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    
    return (
      <div className="my-8">
        <Slider></Slider>

        <h1 className="text-6xl text-slate-900 font-extrabold text-center p-4">
          My Services
        </h1>
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className='text-center mt-8'>
          <Link to="/allServices">
            <button className="btn ">Load More</button>
          </Link>
        </div>
        {/* <Services></Services> */}
      </div>
    );
};

export default Home;