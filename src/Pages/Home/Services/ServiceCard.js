import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, title, price,description } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <PhotoProvider>
        <PhotoView src={img}>
          <img src={img} alt="service" />
        </PhotoView>
      </PhotoProvider>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-lg font-semibold">Price: $ {price}</p>
        <p>{description.slice(0, 50) + "...."}Read more</p>
        <div className="card-actions justify-end">
          <Link to={`/servicedetails/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
