import React, { useState } from "react";
import { TbPencil } from "react-icons/tb";
import { Todo } from "../assets/assets";
import Image from "next/image";
import axios from "axios";
import Modal from "./Modal";

const AddActivity = ({ clickAction }) => {
  const [modal, setModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title } = e.target;

    console.log(title.value);

    axios("https://floating-mountain-35184.herokuapp.com/activity-groups", {
      method: "POST",
      data: {
        title: title.value,
      },
      responseType: "json",
    })
      .then((res) => {
        if (res.status === 201) {
          // alert("berhasil");
          setModal(!modal);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex flex-col gap-4">
      {modal && <Modal title="Activity berhasil ditambah" />}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex items-center justify-between w-full border-b-[1px] py-2">
          <input
            type="text"
            id="title"
            name="title"
            placeholder="New Acitivity"
            className=" bg-transparent outline-none w-full "
          />

          <label htmlFor="title">
            <span className="text-[#A4A4A4] text-lg">
              <TbPencil />
            </span>
          </label>
        </div>

        <button className="xl:w-[159px] w-[120px] xl:h-[44px] h-12 bg-[#16ABF8] rounded-full flex items-center justify-center gap-2 text-white cursor-pointer self-end">
          <h1 className="xl:text-2xl text-lg font-semibold">+</h1>
          <h1>Tambah</h1>
        </button>
      </form>
      <div className="flex flex-col gap-5 items-center justify-center font-semibold text-[#555555] mt-20">
        <div className="w-full  ">
          <Image src={Todo} />
        </div>
        <h1>Buat List Item kamu</h1>
      </div>
    </div>
  );
};

export default AddActivity;
