import Image from "next/image";
import React from "react";
import { Sukses } from "../assets/assets";

const Modal = ({ title = "Activity berhasil dihapus" }) => {
  setTimeout(() => {
    window.location.reload();
  }, 5000);
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-black/50 fixed top-0 left-0 px-5 z-50">
      <div className="w-full  rounded-xl text-sm  bg-white shadow-[0_4px_10px_0px_rgba(0,0,0,0.1)] flex items-center justify-center gap-2 p-4 ">
        <Image src={Sukses} />
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Modal;
