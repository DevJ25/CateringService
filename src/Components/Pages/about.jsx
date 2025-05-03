import React from "react";
import about from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import about3 from "../../assets/about3.png";
import { Footer } from "./footer";

export const About = () => {
  return (
    <>
      <div className="bg-[#c9cbcf] text-white font-normal w-full h-auto flez flex-col">
        <section className="w-full h-auto flex flex-row justify-center items-center gap-2 p-4">
          <div className="  w-[40%] h-auto flex justify-center items-center">
            <figure className=" flex  justify-center bg-gray-800 items-center w-[80%] h-auto rounded-md">
              <img className=" w-[100%] h-auto " src={about} alt="" />
            </figure>
          </div>
          <article className="w-[60%] h-auto flex flex-col gap-2 justify-center items-center">
            <h2 className="text-4xl text-black font-bold ">Sobre Nosotros</h2>
            <p className=" text-2xl text-gray-600 font-sans">
              En Delicias Catering transformamos ingredientes excepcionales en
              experiencias memorables. Con maestría culinaria y atención
              personalizada, convertimos cada evento en una celebración de
              sabores únicos. Nuestro secreto: pasión por la gastronomía,
              compromiso con la calidad y la firme creencia de que cada ocasión
              merece ser extraordinaria. Mientras usted disfruta del momento,
              nosotros nos encargamos de crear magia en cada plato.
            </p>
          </article>
        </section>
        <section className="w-full h-auto flex flex-row justify-center items-center gap-2 p-4">
          <main className="w-[60%] h-auto flex flex-col gap-2justify-center items-center">
            <h2 className="text-4xl text-center font-bold">Mision</h2>
            <p className="text-2xl">
              Deleitar paladares y crear momentos inolvidables a través de
              experiencias gastronómicas excepcionales, utilizando ingredientes
              de calidad y un servicio personalizado que supere las expectativas
              de nuestros clientes en cada evento.
            </p>
          </main>
          <div className="w-[40%] h-auto flex justify-center items-center">
            <figure className="flex  justify-center bg-gray-800 items-center w-[80%] h-auto rounded-md">
              <img className="w-[70%] h-auto" src={about2} alt="" />
            </figure>
          </div>
        </section>
        <section className="w-full h-auto flex flex-row justify-center items-center p-2">
          <div className="w-[40%] h-auto flex flex-col gap-2justify-center items-center ">
            <figure className="flex  justify-center bg-gray-800 items-center w-[80%] h-auto rounded-md p-6">
              <img className="w-[80%] h-auto" src={about3} alt="" />
            </figure>
          </div>
          <article className="w-[60%] h-auto p-4 flex flex-col gap-2 justify-center items-center">
            <h2 className="text-4xl text-center font-bold">Vision</h2>
            <p className="text-2xl">
              Ser reconocidos como el referente gastronómico preferido en
              servicios de catering, distinguiéndonos por nuestra innovación
              culinaria, excelencia operativa y capacidad para transformar
              cualquier celebración en una experiencia extraordinaria y
              memorable.
            </p>
          </article>
        </section>
      </div>
      <Footer />
    </>
  );
};
