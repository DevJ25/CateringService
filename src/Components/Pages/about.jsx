import React from "react";
import about from "../../assets/image.png";
export const About = () => {
  return (
    <>
      <div className="bg-[#c9cbcf] text-white font-normal w-full h-auto flez flex-col">
        <section className="w-full h-auto flex flex-row gap-2 p-4">
          <div className=" relative w-[30%] bg-amber-900 h-[70vh] flex justify-center items-center">
            <figure className="relative flex bg-amber-200 justify-center items-center w-[90%] h-[90%] rounded-full overflow-hidden  top-0 left-0 right-2 bottom-0">
              <img className="absolute w-[100%]  h-auto " src={about} alt="" />
            </figure>
          </div>
          <article className="w-[70%] h-auto flex flex-col gap-2 justify-center items-center">
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
        <section className="w-full h-auto flex flex-row gap-2 p-4">
          <main className="w-[60%] h-auto justify-center items-center bg-cyan-700">
            <h2 className="text-4xl text-center">Mision</h2>
            <p className="text-2xl">
              Deleitar paladares y crear momentos inolvidables a través de
              experiencias gastronómicas excepcionales, utilizando ingredientes
              de calidad y un servicio personalizado que supere las expectativas
              de nuestros clientes en cada evento.
            </p>
          </main>
          <div className="w-[40%] h-auto border-y-indigo-500">
            <img src="" alt="" />
          </div>
        </section>
        <section className="w-full h-auto flex flex-row">
          <figure className="w-[40%] h-auto">
            <img src="" alt="" />
          </figure>
          <article className="w-[60%] h-auto bg-emerald-600">
            <h2 className="text-4xl text-center">Vision</h2>
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
    </>
  );
};
