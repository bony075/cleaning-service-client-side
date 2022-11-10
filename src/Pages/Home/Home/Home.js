import React, { useEffect, useState } from "react";
import useTitle from "../../../Hook/useTitle";
import { Link } from "react-router-dom";
import Slider from "../Slider/Slider";
import ServiceCard from "../Services/ServiceCard";
import { FaLeaf } from "react-icons/fa";
const Home = () => {
  useTitle("Home");
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
      <div className="text-center mt-8">
        <Link to="/allServices">
          <button className="btn ">SEE ALL</button>
        </Link>
      </div>
      {/* <Services></Services> */}

      <div className="text-center mx-auto text-white mt-8">
        <div className="bg-slate-500 w-full  p-8  image-full">
          <div className="font-normal  mb-0">
            <p className="text-4xl p-4">Why My Customers Choose Me?</p>
            <div className="grid grid-cols-3">
              <div className="text-right">
                <div>
                  <h1 className="font-semibold text-2xl">My Experts</h1>
                  <p>
                    and dominate the industry in scale and scope with an
                    adaptable, extensive network that consistently delivers
                    exceptional results.
                  </p>
                </div>
                <div className="mt-4">
                  <h1 className="font-semibold text-2xl">My Committed</h1>
                  <p>
                    to our customers and are guided in all we do by their needs.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://smartdata.tonytemplates.com/cleaning-service-v3/ele-demo1/wp-content/uploads/sites/7/2017/06/the-best-img-1.png"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="text-left">
                <div>
                  <h1 className="font-semibold text-2xl">My Complete</h1>
                  <p>
                    and seek to provide exceptional service and engage in
                    proactive behavior.
                  </p>
                </div>
                <div className="mt-4">
                  <h1 className="font-semibold text-2xl">My Driven</h1>
                  <p>
                    to pursue the highest standards and continuously improve in
                    all aspects of our business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* last section */}
      <div className="mt-8 ">
        <div className="card p-8 lg:card-side bg-base-100 shadow-xl  bg-white">
          <figure>
            <img
              src="https://smartdata.tonytemplates.com/cleaning-service-v3/ele-demo2/wp-content/uploads/sites/6/2021/08/index-img-2.jpg"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-4xl">Natural Cleaning Products</h2>
            <p>
              We feel good about cleaning with our self-formulated, natural
              products that are better for the environment
            </p>
            <div className="flex items-center ">
              <FaLeaf className="text-green-600 mr-4 " />
              <h1 className="text-lg font-semibold">100% Safe & Organic</h1>
            </div>
            <p>
              We combine high concentrates of pure organic essential oils with
              quality plant-derived ingredients.
            </p>
            <div className="flex items-center ">
              <FaLeaf className="text-green-600 mr-4" />
              <h1 className="text-lg font-semibold">We Care About The Earth</h1>
            </div>
            <p>
              All of our packaging, bottles, cleaning equipment, even our
              uniforms come from recycled, fairtrade or low impact origins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
