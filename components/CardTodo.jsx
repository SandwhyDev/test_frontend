import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import Modal from "./Modal";

const CardTodo = ({ title = "Title", date = "5 oktober 2021", id }) => {
  const [modal, setModal] = useState(false);

  const handleDelete = (id) => {
    let yakin = confirm(`yakin hapus ${id} ?`);
    if (!yakin) {
      return false;
    }
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
          setModal(!modal);
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-[150px] h-[150px] rounded-xl bg-white shadow-[0_6px_10px_0px_rgba(0,0,0,0.1)] p-3 flex flex-col justify-between">
      {modal && <Modal title="Activity berhasil dihapus" />}

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
