import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-base-300">
      <footer className="footer sm:footer-horizontal  text-base-content p-4 lg:p-10 w-full lg:w-10/12 mx-auto">
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link to='/all-items' className="link link-hover">Products</Link>
          <Link to='/my-order' className="link link-hover">My Order</Link>
          <Link to='/my-profile' className="link link-hover">Update Profile</Link>
        </nav>
        <nav>
          <h6 className="footer-title">kidzoMart</h6>
          <Link to='/about-us' className="link link-hover">About us</Link>
          <Link to='/contact' className="link link-hover">Contact us</Link>
          <Link to='/my-profile' className="link link-hover">My Account</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link to='/terms' className="link link-hover">Terms & Conditions</Link>
          <Link to='/privacy' className="link link-hover">Privacy policy</Link>
          <Link to='/faq' className="link link-hover">FAQ / Help Center</Link>
        </nav>
        <nav className="md:place-self-center ">
          <div className="grid grid-flow-col gap-4">
            <a href="https://github.com/TawhidulIslamRefat">
              <FaGithub className="w-7 h-7 text-gray-800" />
            </a>
            <a href="https://www.linkedin.com/in/tawhidul-islam-refat-webdeveloper/">
              <FaLinkedin className="w-7 h-7 text-blue-600"/>
            </a>
            <a href="https://x.com/TawhidulRefat">
              <RiTwitterXFill className="w-7 h-7 text-black " />
            </a>
            <a href="https://www.facebook.com/tawhidulislamrefat11">
              <FaFacebook className="w-7 h-7 text-blue-700"/>
            </a>
          </div>
        </nav>
      </footer>
      <footer className="footer text-base-content border-t border-base-100 px-4 pb-10 md:pb-5 sm:px-10 pt-4 w-full max-w-7xl mx-auto">
        <aside className="flex flex-col mx-auto sm:flex-row items-center justify-between gap-2 md:gap-50 lg:gap-100">
          <Link className=" text-sm sm:text-xl font-semibold text-[#F52549]">
            KidzoMart –
            <span className="text-sm sm:text-[16px] text-black">
              A Kids Toy Store Platform
            </span>
          </Link>
          <p>© 2025 KidzoMart. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
