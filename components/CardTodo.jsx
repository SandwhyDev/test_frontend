import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";

const CardTodo = ({ title = "Title", date = "5 oktober 2021" }) => {
  return (
    <div className="w-[150px] h-[150px] rounded-xl bg-white shadow-[0_6px_10px_0px_rgba(0,0,0,0.1)] p-3 flex flex-col justify-between">
      <h1 className="font-bold capitalize">{title}</h1>

      <div className="flex justify-between items-center w-full text-xs text-[#888888]">
        <p>{date}</p>
        <HiOutlineTrash className="text-base" />
      </div>
    </div>
  );
};

export default CardTodo;
