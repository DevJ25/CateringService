import React from "react";
import imageMain from "../../assets/imageI.png";
import { Footer } from "./footer";

export const Home = () => {
  return (
    <>
      <main className="relative flex flex-row w-full h-[86vh] bg-[#ffffff] ">
        <div className="relative flex justify-center items-center w-[40%] h-[86vh] ">
          <div className="absolute w-56 h-[100vh] text-end bg-[#1D1C1C] -top-20 pl-2 flex flex-col justify-center items-center">
            <figure className="obsolute w-72 h-auto">
              <img className="obsolute w-80 h-auto" src={imageMain} alt="" />
            </figure>
          </div>
        </div>
        <div className="flex flex-col w-[60%] h-full justify-center items-start  bg-[#ffffff] gap-2">
          <h1 className="text-7xl font-bold text-slate-900">
            D`BOLIVAR GOURMET
          </h1>
          <p className="text-4xl font-normal text-slate-900">
            Sabores que enamoran, eventos que inspiran
          </p>
          <span className="text-4xl bg-red-500 p-3 rounded-md text-white">
            Reserva tu catering ahora{" "}
          </span>
          <button className="text-3xl font-bold bg-[#2C2C2C] rounded-md p-2 text-white hover:bg-[#1D1C1C] cursor-pointer">
            Reservar Ahora
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};
