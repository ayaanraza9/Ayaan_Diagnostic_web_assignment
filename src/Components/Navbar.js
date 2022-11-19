import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { ImFacebook2 } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";

const Navbar = () => {
  const links = [
    {
      Id: 1,
      link: "Consult a Doctor",
      src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      Id: 2,
      link: "Order Medicine",
      src: "https://images.pexels.com/photos/208541/pexels-photo-208541.jpeg?cs=srgb&dl=pexels-pixabay-208541.jpg&fm=jpg",
    },
    {
      Id: 3,
      link: "Book for diagnostic",
      src: "https://cdn.pixabay.com/photo/2018/06/26/05/08/lab-3498584__340.jpg",
    },
  ];
  const socials = [
    {
      id: 1,
      src: <ImFacebook2 size={25} />,
    },
    {
      id: 2,
      src: <BsTwitter size={25} />,
    },
    {
      id: 3,
      src: <AiFillYoutube size={25} />,
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center h-28 w-screen bg-[#2e3192] grid-cols-2 ">
        <div className="flex w-5/6 ">
          <div className="w-10/12 h-28 flex">
            <ul className="flex  justify-between items-center">
              {links.map(({ id, link, src }) => (
                <li
                  key={id}
                  className="flex justify-center items-center cursor-pointer mx-16 capitalize font-bolder hover:scale-105 duration-200 text-white text-2xl hover:underline-offset-4"
                >
                  <img
                    src={src}
                    alt=""
                    className="w-16 h-16 rounded-lg border-white border-2"
                  />
                  <b className="px-4">{link}</b>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <ul className="flex justify-between items-center">
              {socials.map(({ id, src }) => (
                <li
                  key={id}
                  className="cursor-pointer mx-4 capitalize font-bolder hover:scale-105 duration-200 text-3xl hover:underline-offset-4 text-white"
                >
                  {src}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
