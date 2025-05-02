import React from "react";
import { useState } from "react";
import logo from "../Components/Icons/logoC.svg";
import { NavLink } from "react-router-dom";
import { RegisterFormModal } from "../Components/Controllers/form";
import { InicioSesion } from "../Components/Controllers/inicioSesion";

export const Nav = () => {
  let [isOpen, setIsOpen] = useState(false);

  const navClass = ({ isActive }) =>
    isActive
      ? "text-black font-semibold border-b-2 border-black"
      : "text-gray-700 hover:text-black";
  return (
    <>
      <header className="flex justify-center items-center p-1 w-full h-auto">
        <div className="flex justify-around items-center w-[95%] h-auto rounded-lg p-2 ">
          <div>
            <figure className="flex justify-center items-center bg-black rounded-full size-14">
              <img className="w-20 h-auto" src={logo} alt="" />
            </figure>
          </div>
          <div className="flex justify-end items-center w-full h-auto pl-4">
            <nav className="flex w-[50%] bg-[#F1F1F1] justify-around p-4 rounded-2xl gap-2">
              <ul className="flex flex-row gap-4 ">
                <li>
                  <NavLink className={navClass} to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className={navClass} to={"/about"}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className={navClass} to={"/services"}>
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink className={navClass} to={"/menu"}>
                    Menu
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex gap-2 justify-items-end items-center  h-auto">
            <button
              className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded m-2"
              onClick={() => setIsOpen(true)}
            >
              Login
            </button>
          </div>
        </div>
      </header>
      <RegisterFormModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        switchToLogin={InicioSesion}
      />
    </>
  );
};
