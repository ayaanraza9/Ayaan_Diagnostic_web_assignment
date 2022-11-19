import React from "react";
import { useState } from "react";
import Microscope from "../Assests/microscope.png";
function Card(props) {
  // states for style and read more
  const [style, setStyle] = useState({});
  const [readMore, setReadMore] = useState(false);

  // show details function
  const showDetails = () => {
    const styleobj = {
      gridColumnStart: 1,
      gridColumnEnd: 3,
      gridRowEnd: 3,
      gridRowStart: 1,
    };
    if (readMore === false) {
      setReadMore(true);
      setStyle(styleobj);
    } else {
      setReadMore(false);
      setStyle({});
    }
  };

  return (
    <div
      className="px-1 py-1 border-2 border-slate-300 text-lg rounded-xl bg-white h-76 p-6"
      onClick={showDetails}
      style={style}
    >
      <div className="h-[340px]">
        <div className="p-1">
          <div className="w-20 h-20 flex justify-center items-center rounded-full bg-sky-100">
            <img className="h-16 w-16 " src={Microscope} alt="Microscope" />
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mt-2">
            {props.value.title}
          </h3>
          <p className="text-slate-400 font-normal my-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing...
          </p>
        </div>
        <div className="text-slate-500 p-2 font-base text-sm">{props.value.noOfTest}</div>
        <div className="flex border-t-2 p-2">
          <div className="w-1/2 font-bold p-2">
            <p>&#8377; {props.value.price}</p>
            <div className="flex">
              <p className="text-slate-400 font-semibold">
                &#8377;<s>{props.value.priceBefore}</s>
              </p>
              <p className="text-green-600 font-medium ml-2">
                {100 - (props.value.price / props.value.priceBefore) * 100}% off
              </p>
            </div>
          </div>
          <div className="w-1/2 flex items-center flex-row-reverse">
            <button className="border-[#27B6DB] border-2 rounded-lg text-[#27B6DB] font-medium w-36 h-12" onClick={() => props.addProductToCart(props.value)}>
              Add to card
            </button>
          </div>
        </div>
      </div>

      {/* conditional rendering for read more */}
      {readMore && (
        <div className="bg-[#EFF5F5] p-2 rounded-lg bottom-0">
          <h2 className="font-bold text-slate-800">
            Sample Type :{" "}
            <span className="text-slate-500 font-semibold">Blood</span>
          </h2>
          <h2 className="font-bold text-slate-800">
            Prepration :
            <span className="text-slate-500 font-semibold">
              fasting from early morning
            </span>
          </h2>
          <h2 className="font-bold text-slate-800">
            Category :
            <span className="text-slate-500 font-semibold"> Lab Test</span>
          </h2>
          <h2 className="font-bold text-slate-800">
            About :
            <span className="text-slate-500 font-semibold">
              A complete blood count (CBC) is a group of tests that are used to
              evaluate the overall health of the body. It helps in detecting a
              wide range of disorders such as anemia, infection, and leukemia.
              It measures several components of the blood that includes red
              blood cells (RBC) which carry oxygen, white blood cells (WBC)
              which fight infection, hemoglobin (Hb) which is the
              oxygen-carrying protein in red blood cells, hematocrit which is
              the proportion of red blood cells to the fluid component, or
              plasma, in the blood and platelets that help with blood clotting
            </span>
          </h2>
        </div>
      )}
    </div>
  );
}

export default Card;
