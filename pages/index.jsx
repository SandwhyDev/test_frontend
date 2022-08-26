import Head from "next/head";
import Image from "next/image";
import { activity1, Todo } from "../assets/assets";
import CardTodo from "../components/CardTodo";
import Seo from "../components/Seo";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import moment from "moment";
import AddActivity from "../components/AddActivity";
import Modal from "../components/Modal";
import Dashboard from "../components/Dashboard";

export default function Home() {
  const [addActivity, setAddActivity] = useState(false);

  const handleTambah = () => {
    setAddActivity(!addActivity);
  };
  return (
    <div className="w-screen min-h-screen h-auto  bg-white text-black font-poppins">
      <Seo />
      <nav className="w-full py-8 bg-[#16ABF8] items-center flex text-white uppercase px-5  xl:px-[200px] font-bold ">
        {!addActivity ? (
          <h1>To Do List App</h1>
        ) : (
          <div className="flex gap-2 items-center" onClick={handleTambah}>
            <IoIosArrowBack />
            <h1>New Activity</h1>
          </div>
        )}
      </nav>

      {/* wrapper  */}
      <div className="w-screen h-auto px-5  xl:px-[200px] py-5 xl:py-10 flex flex-col gap-5 ">
        <div className="flex items-center w-full justify-between">
          {!addActivity ? (
            <Dashboard clickAction={handleTambah} />
          ) : (
            <AddActivity />
          )}
        </div>

        <div className="w-full bg-slate-600 invisible  ">
          {/* <Image src={activity1} /> */}
        </div>
      </div>
      {/* wrapper  */}
    </div>
  );
}
