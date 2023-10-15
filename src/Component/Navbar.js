import React from "react";
import BookIcon from "..//assets/books.7481a139.svg";
import BigLogo from "..//assets/bigLogo.svg";
import { BsCart2 } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
function Navbar({setShowCart}) {
  return (
    <>
      <div className="w-full shadow-2xl z-10 bg-white flex items-center justify-between px-2 py-4 border-b-2 fixed top-0 left-0">
        <div className="w-64">
          <img src={BigLogo} alt="biglogo" />
        </div>
        <div className=" hidden md:flex justify-center items-center border w-[400px] ">
          <input
            type="text"
            placeholder="Search books, genres,authors, etc."
            className="w-[30rem] border p-2 outline-none px-4 rounded-tl rounded-bl"
          />
          <div className="border p-2 bg-slate-100">
            <BiSearch size={24} />
          </div>
        </div>
        <div className="border p-2 md:hidden bg-slate-100">
          <BiSearch size={24} />
        </div>
        <div className="w-32 p-2 flex items-center justify-between">
          <div className="rounded-full p-2 bg-zinc-400">
            <img src={BookIcon} alt="book_icon" />
          </div>
          <div>
            <button onClick={()=>{setShowCart(true)}}>{<BsCart2 size={24} />}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
