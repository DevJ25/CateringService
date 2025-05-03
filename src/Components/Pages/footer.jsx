import React from "react";
import logo from "../Icons/logoC.svg";
export const Footer = () => {
  return (
    <>
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
