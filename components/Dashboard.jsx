import React, { useEffect, useState } from "react";
import axios from "axios";
import CardTodo from "./CardTodo";
import activity1 from "../assets/activity-empty-state.svg";
import Image from "next/image";
import { RiLoader4Fill } from "react-icons/ri";

const Dashboard = ({ clickAction }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
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
      })
      .finally(() => {
        setIsLoading(false);
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

      {isLoading ? (
        <div className="w-full h-full items-center flex justify-center">
          <RiLoader4Fill className="animate-spin text-3xl text-[#16ABF8]" />
        </div>
      ) : (
        <div className="flex flex-wrap gap-5">
          {data.length === 0 ? (
            <div className="flex flex-col gap-5 items-center justify-center font-semibold text-[#555555] mt-20">
              <div className="w-full  ">
                <Image src={activity1} priority={true} />
              </div>
              <h1>Buat List Item kamu</h1>
            </div>
          ) : (
            <div className="flex flex-wrap gap-5">
              {data.map((e) => {
                return (
                  <CardTodo
                    key={e.id}
                    title={e.title}
                    date={e.updated_at
                      .split("T")[0]
                      .split("-")
                      .reverse()
                      .join(" ")}
                    id={e.id}
                  />
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
