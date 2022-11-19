import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

const Search = (props) => {
  return (
    <div className="flex justify-center items-center w-screen h-20 bg-slate-200">
      <div className=" flex items-center px-4 w-[76vw] h-20">
        <div className="lg:flex justify-center items-center w-[300px] bg-white text-[#2e3192] rounded-lg xxs:hidden">
          <MdOutlineLocationOn size={30} className="text-[#2e3192]" />
          <select className="h-14 flex justify-center items-center">
            <option>Select Location</option>
            <option>Andaman and Nicobar Islands</option>
            <option>Daman and Diu</option>
            <option>Dadra and Nagar Haveli</option>
            <option>Chandigarh</option>
            <option>Assam</option>
            <option>Arunachal Pradesh</option>
            <option>Uttar Pradesh</option>
            <option>Goa</option>
          </select>
        </div>
        <div className="lg:w-[45.5vw] mx-5 bg-white h-14 flex rounded-lg justify-center items-center xxs:w-full">
          <AiOutlineSearch size={40} className="text-slate-300" />
          <input
            type="text"
            className="w-full h-10 rounded-lg lg:text-xl xxs:text-xs"
            placeholder="Search for lab tests or health packages"
            onChange={(e) => props.setSearchkey(e.target.value)}
          />
        </div>
        <div className="lg:flex items center xxs:hidden">
          <button className="bg-[#27B6DB] w-40 h-14 text-white text-xl rounded-lg">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
