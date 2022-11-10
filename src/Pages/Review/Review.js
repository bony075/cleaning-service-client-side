import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../Hook/useTitle";
import ReviewRow from "./ReviewRow";

const Review = () => {
  const { user, logOut } = useContext(AuthContext);
  const [review, setReview] = useState([]);
  useTitle("Review");
  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          "cleaningService-token"
        )}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setReview(data);
      });
  }, [user?.email, logOut]);
  //delete
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this service"
    );
    if (proceed) {
      fetch(`http://localhost:5000/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = review.filter((rvw) => rvw._id !== id);
            setReview(remaining);
          }
        });
    }
  };

  return (
    <div className='text-center'>
      <h2 className="text-5xl">You have {review.length} review</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            {/* <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr> */}
          </thead>
          <tbody>
            {review.map((review) => (
              <ReviewRow
                key={review._id}
                review={review}
                handleDelete={handleDelete}
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
