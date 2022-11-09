import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const {_id,img,title } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
          <h2 className="card-title">{ title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
            <Link to={`/servicedetails/${_id}`}>
              <button className="btn btn-primary">Buy Now</button>
            </Link>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;