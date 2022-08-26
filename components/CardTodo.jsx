import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { Alert, Sukses } from "../assets/assets";
import Modal from "./Modal";
import Image from "next/image";

const CardTodo = ({ title = "Title", date = "5 oktober 2021", id }) => {
  const [modal, setModal] = useState(false);

  const handleDelete = () => {
    setModal(!modal);
  };

  const showDelete = (id) => {
    axios(
      `https://floating-mountain-35184.herokuapp.com/activity-groups/${id}`,
      {
        method: "DELETE",
        data: {
          id: id,
        },
        responseType: "json",
      }
    )
      .then((res) => {
        if (res.status === 200) {
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-[150px] h-[150px] rounded-xl bg-white shadow-[0_6px_10px_0px_rgba(0,0,0,0.1)] p-3 flex flex-col justify-between">
      {modal && (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-black/50 fixed top-0 left-0 px-5 z-50">
          <div className="w-full  rounded-xl text-sm  bg-white shadow-[0_4px_10px_0px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center gap-7 p-4 text-center ">
            <Image src={Alert} priority={true} />
            <h1>
              Apakah anda yakin menghapus activity{" "}
              <span className="font-bold">&quot;{title}&quot;?</span>
            </h1>

            <div className="flex gap-4 w-full">
              <button
                onClick={() => {
                  window.location.reload();
                }}
                className="bg-[#F4F4F4] p-3 w-full rounded-full font-bold text-[#4A4A4A]"
              >
                Batal
              </button>
              <button
                className="bg-[#ED4C5C] p-3 w-full rounded-full text-white font-bold"
                onClick={() => {
                  showDelete(id);
                }}
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}

      <h1 className="font-bold capitalize">{title}</h1>

      <div className="flex justify-between items-center w-full text-xs text-[#888888]">
        <p>{date}</p>
        <HiOutlineTrash
          className="text-base cursor-pointer"
          onClick={() => {
            handleDelete(id);
          }}
        />
      </div>
    </div>
  );
};

export default CardTodo;
