import React from "react";
import { getPrice } from "../utils/helper";
import { MdDelete } from "react-icons/md"
import { BsFillCalendarFill } from "react-icons/bs"
import { CiPercent } from "react-icons/ci"

const Cart = ({ cartData, removeProductToCart }) => {
  // console.log('cartData :>> ', cartData);



  return (
    <>
      <div className="flex w-screen justify-center items-center py-10">
        <div className="w-[76vw] flex justify-between mt-20">
          <div className="w-[50vw]">
            <div><h1 className="text-4xl font-bold">Cart Item(s): {cartData.length}</h1></div>
            <div className="w-full">{
              cartData.map((cartItem) => (
                <div key={cartItem.id} className="my-6 border-2 flex justify-between p-2 rounded-lg items-center">
                  <div className="flex-2">
                    <p className="text-2xl font-bold ">{cartItem.title}</p>
                    <p className="text-sm font-semibold text-slate-300 p-1">Includes 12 tests</p>
                    <select className="border-2 border-slate-300 p-1">
                      <option>Suresh Kumar</option>
                      <option>Suresh Kumar</option>
                      <option>Suresh Kumar</option>
                    </select>
                  </div>
                  <div className="font-bold">Qty:1</div>
                  <div className="p-2">
                    <p className="font-bold text-lg">&#8377;{cartItem.price}</p>
                    <div className="flex">
                      <p className="price_before text-slate-300 font-medium">&#8377;{cartItem.priceBefore}</p><span className="text-green-600 font-medium ml-2">
                        {100 - (cartItem.price / cartItem.priceBefore) * 100}% off
                      </span>
                    </div>

                    <button onClick={() => removeProductToCart(cartItem)} className="flex justify-center items-center"><MdDelete /><span> Remove</span></button>

                  </div>

                </div>
              ))
            }
            </div>
          </div>
          <div className="mt-16 w-[26vw] items-center justify-center flex">
            <div className="w-[19vw] font-semibold">
              <div className="border-2 border-sky-600 bg-sky-100 p-6 text-sm rounded-lg">
                <div className="flex justify-between items-center ">
                  <h2 className="text-sky-600 font-semibold text-base"> Home Collection Address</h2> <span className="border-2 border-sky-600 rounded-2xl text-sky-600 p-1 px-3">Change</span>
                </div>
                <p className="font-bold">Suresh Kumar</p>
                <p>9876543210</p>
                <p className="text-slate-600">#123, Street Avenue, Madhapur</p>
                <p className="text-slate-600">Hyderabad - 500018</p>
              </div>
              <div className=" border-2 border-sky-600 text-sky-600 p-3 my-4 rounded-lg flex items-center"><BsFillCalendarFill /><span className="ml-1 font-bold"> Select Slot</span></div>
              <div className=" border-2 border-sky-600 text-sky-600 p-3 my-4 rounded-lg flex items-center"><CiPercent /><span className="ml-1 font-bold">Apply Coupon</span></div>

              <div className="border-2 border-slate-300 rounded-lg font-semibold text-slate-600">
                <div className="p-2">
                  <p className="flex justify-between py-2">No of test: <span> {cartData.length}</span></p>
                  <p className="flex justify-between py-2">Value: <span>&#8377;{getPrice(cartData, true)}</span></p>
                  <p className="flex justify-between py-2">Discount: <span>&#8377;{getPrice(cartData, false) - getPrice(cartData, true)}</span></p>
                  <p className="flex justify-between  py-2">Coupon Applied: <span>0</span></p>
                  <p className="flex justify-between py-2">Sample Collection Charges: <span>0</span></p>

                  <p className="flex justify-between py-2">Total Amount: <span>&#8377;{getPrice(cartData, true) - (getPrice(cartData, true) - getPrice(cartData, false))}</span></p>
                </div>
                <div className="bg-green-300 py-2">
                  <p className="flex justify-between">Total Savings: <span>&#8377;{getPrice(cartData, false) - getPrice(cartData, true)}</span></p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
