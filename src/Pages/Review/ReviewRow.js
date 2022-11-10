import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review, handleDelete }) => {
  const { _id, serviceName, price, email, customer, phone, service, message } =
    review;
  const [reviewService, setReviewService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setReviewService(data));
  }, [service]);

  return (
    <div>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-24 h-24">
                {reviewService?.img && (
                  <img
                    src={reviewService.img}
                    alt="Avatar Tailwind CSS Component"
                  />
                )}
              </div>
            </div>
            <div>
              <div className="font-bold">{customer}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td>
          {serviceName}
          <br />
          {/* <span className="badge badge-ghost badge-sm">${price}</span> */}
        </td>
        <td> {message}</td>
        <th>
          {/* <button
              onClick={() => handleStatusUpdate(_id)}
              className="btn btn-ghost btn-xs"
            >
              {status ? status : "pending"}
            </button> */}
          <th>
            <label>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-ghost"
              >
                DELETE
              </button>
            </label>
          </th>
        </th>
      </tr>
    </div>
  );
};

export default ReviewRow;