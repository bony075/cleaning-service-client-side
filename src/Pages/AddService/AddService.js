import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../Hook/useTitle";

const AddService = () => {
  const { user } = useContext(AuthContext);
  useTitle("Add Service");
  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    //  const email = user?.email || "unregistered";
    const img = form.img.value;
    const price = form.price.value;
    const description = form.description.value;

    const order = {
      //  service: _id,
      title,
      img,
      price,
      //  customer: name,
      //  email,
      //  phone,
      description,
    };

    fetch("https://cleaning-service-server-sable.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        //  authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Add service successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div className="my-8">
      <h1 className="text-4xl font-bold text-center underline underline-offset-8 mb-8">
        ADD NEW SERVICE
      </h1>
      <form onSubmit={handleAddReview} className="w-2/3 mx-auto">
        {/* <h2 className="text-4xl">You are about to order: {title}</h2>
          <h4 className="text-3xl">Price: {price}</h4> */}
        <div className="grid grid-cols-1  gap-4">
          <input
            name="title"
            type="text"
            placeholder="title"
            className="input input-ghost w-full  input-bordered"
          />
          <input
            name="img"
            type="text"
            placeholder="img URL"
            className="input input-ghost w-full  input-bordered"
          />
          <input
            name="price"
            type="text"
            placeholder="price"
            className="input input-ghost w-full  input-bordered"
            required
          />
          {/* <input
              name="email"
              type="text"
              placeholder="Your email"
              defaultValue={user?.email}
              className="input input-ghost w-full  input-bordered"
              readOnly
            /> */}
        </div>
        <textarea
          name="description"
          className="textarea textarea-bordered h-24 w-full mt-7"
          placeholder="Your description"
          required
        ></textarea>

        <input className="btn" type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddService;
