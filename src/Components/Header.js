import React, { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import CartContainer from "./CartContainer";
import { useNavigate } from "react-router-dom";

const Header = ({ cartData }) => {
  const navigate = useNavigate()
  const [isCartVisible, setIsCartVisible] = useState(false);
  // console.log('setIsCartVisible', isCartVisible)
  return (
    <>
      <div className="flex justify-center items-center w-screen h-28">
        <div className="flex w-[76vw] h-28">
          {/* left side */}
          <div className="flex items-center text-4xl text-[#2e3192] font-bold float-left w-[50vw] cursor-pointer" onClick={() => navigate("/")}>
            Logo
          </div>
          {/* right side */}
          <div className="flex justify-around items-center lg:w-[26vw]">
            <button className="text-[#1d5ea8] lg:text-lg border-2 lg:p-2 lg:w-30 rounded-lg font-semibold border-[#1d5ea8] xxs:text-xs cursor-pointer">
              Login | SignUp
            </button>
            <button
              type="button"
              className="inline-flex relative items-center p-3 text-sm font-medium text-center text-[#1d5ea8] rounded-lg"
              onClick={() => setIsCartVisible(!isCartVisible)}
            >
              <MdShoppingCart size={45} />
              <div className="inline-flex absolute -top-1 -right-1 justify-center items-center w-7 h-7 text-xs font-bold text-white bg-[#27B6DB] rounded-full border-2 border-white dark:border-gray-900" >
                {cartData.length}
              </div>
            </button>
          </div>
        </div>
      </div >
      <div className={isCartVisible ? "" : 'd-none'}>

        <CartContainer cartData={cartData} />
      </div>
    </>
  );
};

export default Header;
