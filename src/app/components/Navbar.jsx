"use client";

import Link from "next/link";
import Logo from "./Logo";
import NavLink from "./ActiveLink/NavLink";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>
      <li>
        <NavLink href="/services">Services</NavLink>
      </li>
      <li>
        <NavLink href="/about">About</NavLink>
      </li>
      <li>
        <NavLink href="/my-bookings">My Bookings</NavLink>
      </li>
    </>
  );
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="navbar max-w-10/12 md:max-w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-netural"
            >
              {links}
            </ul>
          </div>
          <Logo></Logo>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-netural font-medium">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className=" bg-teal-500 text-white text-center p-2 rounded-md hover:bg-teal-600"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
