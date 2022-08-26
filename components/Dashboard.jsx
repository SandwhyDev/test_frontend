import React, { useEffect, useState } from "react";
import axios from "axios";
import CardTodo from "./CardTodo";

const Dashboard = ({ clickAction }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://floating-mountain-35184.herokuapp.com/activity-groups", {
      method: "GET",
      responseType: "json",
    })
      .then((res) => {
        if (res.status === 200) {
          // console.log(res.data.data);
          setData(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center justify-between w-full">
        <h1 className="xl:text-3xl font-bold">Activity</h1>

        <div
          className="xl:w-[159px] w-[120px] xl:h-[44px] h-12 bg-[#16ABF8] rounded-full flex items-center justify-center gap-2 text-white cursor-pointer"
          onClick={clickAction}
        >
          <h1 className="xl:text-2xl text-lg font-semibold">+</h1>
          <h1>Tambah</h1>
        </div>
      </div>

      <div className="flex flex-wrap gap-5">
        {data.map((e) => {
          return (
            <CardTodo
              title={e.title}
              date={e.updated_at.split("T")[0].split("-").reverse().join(" ")}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
