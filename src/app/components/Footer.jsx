import React from "react";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footer footer-horizontal footer-center bg-neutral text-base-100 rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <Link href="/">Home</Link>
          <Link href="/">Services</Link>
          <Link href="/">About</Link>
          <Link href="/">My Bookings</Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link href="https://www.facebook.com" target="_blank">
              <FaFacebook size={25} />
            </Link>
            <Link href="https://www.youtube.com" target="_blank">
              <FaYoutube size={25} />
            </Link>
            <Link href="https://www.x.com" target="_blank">
              <BsTwitterX size={20} />
            </Link>
            <Link href="https://www.linkedin.com" target="_blank">
              <FaLinkedin size={25} />
            </Link>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by{" "}
            <strong className="text-primary">Care.xyz</strong>
          </p>
        </aside>
      </div>
    </>
  );
};

export default Footer;
