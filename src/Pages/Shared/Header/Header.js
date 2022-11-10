import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Header = () => {
  const { user ,logOut} = useContext(AuthContext);

  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.error(e));
  };



  const menuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allServices">All Services</Link>
      </li>

      {user?.email ? (
        <>
          <li>
            <Link to="/review">My Review</Link>
          </li>
          <li>
            <Link to="/addService">Add Service</Link>
          </li>
          {/* <li>
            <button className="btn-ghost">LogOut</button>
          </li> */}
        </>
      ) : (
        <li>
          {/* <Link to="/login">Login</Link> */}
        </li>
      )}
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="w-12" src="logo.png" alt="" />
          Cleaning Service
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-semibold">{menuItem}</ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <>
            <p>{user?.displayName}</p>
            <div >
              {/* <>className="tooltip tooltip-left" data-tip={user?.displayName}></> */}
              <button className="">
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    {user?.photoURL ? (
                      <>
                        <img src={user?.photoURL} alt="" />
                      </>
                    ) : (
                      <p>noname</p>
                    )}
                  </div>
                </div>
              </button>
            </div>
            <button className="btn btn-primary ml-4" onClick={handelLogOut}>
              Log Out
            </button>
          </>
        ) : (
          <>
            <NavLink className="btn btn-primary" to="/login">
              Login
            </NavLink>
            <NavLink className="btn btn-success ml-2" to="/signup">
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
