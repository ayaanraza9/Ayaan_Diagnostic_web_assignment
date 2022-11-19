import React from "react";
import { Link } from "react-router-dom";

const CartContainer = ({ cartData }) => {
  return (
    <div className="absolute scroll-my-3 top-52  right-72 lg:w-[300px] md:w- h-72 bg-white drop-shadow-md flex flex-col z-[101]">
      <div className="flex justify-between items-center p-2 text-lg font-semibold h-12 bg-sky-100">
        <h2>Order Summary</h2>
        <p>{cartData.length}Test(s)</p>

      </div>
      <div className="p-4">
        {
          cartData.map(elem => (
            <div key={elem.id} className="  mb-4">
              <div className="flex justify-between">
                <p>{elem.title}</p>
                <p>{elem.price}</p>
              </div>
              <p>includes 12 items</p>
              <hr className="mt-2 border-2" />
            </div>
          ))
        }


      </div>
      <div className="flex justify-center items-center">
        <button className="w-56 h-10 bg-[#1d5ea8] text-white rounded-lg">
          <Link to="/cart">
            Proceed to Cart
          </Link>
        </button>
      </div>
    </div >
  );
};

export default CartContainer;
