import React from "react";
// import "../Style/body.css";
import Card from "./Card";
import cardData from "../CardData";
function CardContainer(props) {

  return (
    <div className="w-screen flex justify-center items-center mt-24  ">
      <div className="justify-center items-center">
        {/* conditianal rendaring for searched term */}
        <div className="justify-center items-center flex">
          {props.searchKey.length > 0 && (
            <section className="w-[76vw] mb-28">
              <p className="text-xl pb-3 text-slate-400">
                Showing search results for{" "}
                <span className="font-bold text-slate-800">
                  "{props.searchKey}"{" "}
                </span>
              </p>
              <div className="grid grid-cols-4 gap-x-6 gap-20 mt-10">
                {props.filteredArr.map((v, i) => {
                  return <Card value={v} key={i} addProductToCart={(d) => props.addProductToCart(d)} />;
                })}
              </div>
            </section>
          )}
        </div>
        {/* popular Test start   */}
        <div className="justify-center items-center flex">
          <section className="w-[76vw] mb-28">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl pb-3 font-bold text-slate-800">
                Popular Test
              </h1>
              <p className="text-[#2e3192] font-bold text-xl cursor-pointer">
                View All
              </p>
            </div>
            <div className="grid lg:grid-cols-4 gap-x-6 gap-20 mt-10 xxs:grid-cols-1">
              {cardData
                .filter((v) => {
                  return v.type === "popularTests";
                })
                .map((v, i) => {
                  return <Card value={v} key={v.id} addProductToCart={(d) => props.addProductToCart(d)} />;
                })}
            </div>
          </section>
        </div>
        {/*  popular Test end  */}

        {/* popular Test start   */}
        <div className="w-screen bg-slate-100 flex justify-center items-center">
          <section className="w-[76vw] mb-28">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl pb-3 font-bold text-slate-800 mt-10">
                Popular Health Packages
              </h1>
              <p className="text-[#2e3192] font-bold text-xl cursor-pointer">
                View All
              </p>
            </div>
            <div className="grid lg:grid-cols-4 gap-x-6 gap-20 mt-10 xxs:grid-cols-1">
              {cardData
                .filter((v, i) => {
                  return v.type === "healthPackage";
                })
                .map((v, i) => {
                  return <Card value={v} key={i} addProductToCart={(d) => props.addProductToCart(d)} />;
                })}
            </div>
          </section>
        </div>
        {/*  popular Test end  */}

        {/* popular Test start   */}
        <div className="w-screen flex justify-center items-center p-10">
          <section className="w-[76vw] mb-20">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl pb-3 font-bold text-slate-800">
                Top Booked Tests
              </h1>
              <p className="text-[#2e3192] font-bold text-xl cursor-pointer">
                View All
              </p>
            </div>
            <div className="grid lg:grid-cols-4 gap-x-6 gap-20 mt-10 xxs:grid-cols-1">
              {cardData
                .filter((v) => {
                  return v.type === "topBooked";
                })
                .map((v, i) => {
                  return <Card value={v} key={i} addProductToCart={(d) => props.addProductToCart(d)} />;
                })}
            </div>
          </section>
        </div>
        {/*  popular Test end  */}
      </div>
    </div>
  );
}

export default CardContainer;
