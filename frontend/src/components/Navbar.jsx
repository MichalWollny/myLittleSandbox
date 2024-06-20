import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <section className=" flex items-center justify-center flex-wrap fixed top-0 w-full left-0 right-0">
        {/*  px-[60%] */}
        <ul className="my-2 py-2 flex flex-row flex-nowrap bg-[#ddcb45] rounded-xl">
          <Link to={"/truckloader"}>
            <a href="#" className="flex items-center transition-colors p-2">
              Truck Symulator
            </a>
          </Link>

          <Link to={""}>
            <a href="#" className="flex items-center transition-colors p-2">
              Create Pallet
            </a>
          </Link>

          <Link to={"/freighter"}>
            <a href="#" className="flex items-center transition-colors p-2">
              Freight Ship
            </a>
          </Link>
          <Link to={"/calender"}>
            <a href="#" className="flex items-center transition-colors p-2">
              Calender
            </a>
          </Link>
        </ul>
      </section>
    </div>
  );
};

export default Navbar;
