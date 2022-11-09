import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const Review = () => {
    const { user, logOut } = useContext(AuthContext);
    const [review, setReview] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:5000/review?email=${user?.email}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setReview(data);
        });
    }, [user?.email]);



    return (
      <div>
        <h2 className="text-5xl">You have {review.length} review</h2>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {review.map((review) => (
                <ReviewRow
                  key={review._id}
                  review={review}
                //   handleDelete={handleDelete}
                //   handleStatusUpdate={handleStatusUpdate}
                ></ReviewRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Review;