import React from "react";
import logo from "../Icons/logoC.svg";
import imageMain from "../../assets/imageI.png";
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
      <footer className="flex flex-col gap-2 w-full h-auto bg-gray-700 p-4">
        <div className="flex flex-row gap-2 justify-between items-center p-3">
          <div className="text-center flex flex-col gap-2 font-bold">
            <h2 className="text-center text-white text-3xl">
              Catering D`Bolivar Gpurmet
            </h2>
            <figure>
              <img src={logo} alt="" />
            </figure>
          </div>
          <div className="text-center">
            <h2 className="text-center text-white font-bold">Contacto</h2>
            <p className="text-white font-medium">+56 999 999 999</p>
            <p className="text-white font-medium">info@catering.com</p>
            <p className="text-white font-medium">www.catering.com</p>
            <p className="text-white font-medium">
              123 Calle, Bogota, Colombia
            </p>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-center text-white font-bold">Servicios</h2>
            <a href="" className="text-white hover:text-black">
              Eventos
            </a>
            <a href="" className="text-white hover:text-black">
              Menu
            </a>
            <a href="" className="text-white hover:text-black">
              Contacto
            </a>
            <a href="" className="text-white hover:text-black">
              Sobre nosotros
            </a>
            <a href="" className="text-white hover:text-black">
              Faq
            </a>
          </div>
        </div>

        <div>
          <p className="text-center text-amber-500">
            © 2025 Catering. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
