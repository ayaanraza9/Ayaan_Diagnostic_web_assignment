import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { ImFacebook2 } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import PlayStore from "../Assests/playstore.png";
import AppStore from "../Assests/appstore.png";

const Footer = () => {
  return (
    <>
      <div className="w-screen h-80 bg-[#2e3192]">
        <div className="flex items-center w-[76vw] m-auto text-white">
          <div className="flex justify-center items-center h-64 w-[76vw]">
            <div className="w-[15.2vw] h-full grid grid-cols-1 items-center">
              <div className=" leading-10">
                <h2 className="font-bold">Quick Links</h2>
                <p>FAQ's</p>
                <p>About Us</p>
                <p>Contact Us</p>
              </div>
            </div>
            <div className="w-[15.2vw] h-full grid grid-cols-1 items-center">
              <div className=" leading-10">
                <h2 className="font-bold">Services</h2>
                <p>Order Medicine</p>
                <p>Lab Tests</p>
                <p>Doctor Consultation</p>
              </div>
            </div>
            <div className="w-[15.2vw] h-full grid grid-cols-1 items-center">
              <div className=" leading-10">
                <h2 className="font-bold">Our Policies</h2>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
                <p>Cancellation Policy</p>
              </div>
            </div>
            <div className="w-[15.2vw] h-full grid grid-cols-1 items-center">
              <div className=" leading-10">
                <h2 className="font-bold">Socials</h2>
                <div className="flex py-4">
                  <ImFacebook2 />
                  <BsTwitter className="ml-4" />
                  <AiFillYoutube className="ml-4" />
                </div>
                <p>Need Help?</p>
                <p className="flex items-center">
                  <BsFillTelephoneFill />
                  +91 9876543210
                </p>
              </div>
            </div>
            <div className="w-[15.2vw] h-full grid grid-cols-1 items-center ">
              <div className=" leading-10">
                <h2 className="font-bold">Our Apps</h2>
                <div className="w-36 h-12 bg-white rounded-xl mt-4">
                  <img
                    src={PlayStore}
                    alt=""
                    className="w-36 h-12 rounded-xl"
                  />
                </div>
                <div className="w-36 h-12 bg-white rounded-xl mt-4">
                  <img src={AppStore} alt="" className="w-36 h-12 rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <hr className="w-[76vw]" />
        </div>
        <div className=" h-16 w-screen items-center justify-center flex text-white">
          <p>©Company. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
