import React, { useState } from "react";
import { Personalizados } from "./layouts/personalizados";
import { Predeterminados } from "./layouts/predeterminados";
import { Footer } from "./footer";
export const Services = () => {
  const [activeTab, setActiveTab] = useState("predeterminados");

  return (
    <>
      <header className="flex flex-row justify-center items-center w-full h-auto bg-[#F1F1F1] p-4 gap-2">
        <button
          onClick={() => setActiveTab("predeterminados")}
          className={`px-6 py-2 font-bold ${
            activeTab === "predeterminados"
              ? "bg-gray-500 text-white"
              : "bg-white"
          } border border-blue-400`}
        >
          PREDETERMINADOS
        </button>
        <button
          onClick={() => setActiveTab("personalizados")}
          className={`px-6 py-2 font-bold ${
            activeTab === "personalizados"
              ? "bg-gray-500 text-white"
              : "bg-white"
          } border border-blue-400`}
        >
          PERSONALIZADOS
        </button>
      </header>

      <main className="p-4">
        {activeTab === "predeterminados" ? (
          <Predeterminados />
        ) : (
          <Personalizados />
        )}
      </main>
      <Footer />
    </>
  );
};
