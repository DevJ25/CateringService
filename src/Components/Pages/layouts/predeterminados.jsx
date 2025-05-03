import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FormPred } from "./formPredeterminados";
import "swiper/css";

export function Predeterminados() {
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8083/api/imagenes")
      .then((res) => res.json())
      .then((data) => {
        setImagenes(data);
      })
      .catch((error) => {
        console.error("Error al obtener las imágenes:", error);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center text-black">Servicios Predeterminados</h2>
      <div className="w-full flex flex-wrap justify-center items-center gap-4 p-4 ">
        <Swiper
          spaceBetween={1}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 3000 }}
          className="w-full flex flex-row"
        >
          {imagenes.map((img) => (
            <SwiperSlide
              className="w-full flex flex-row justify-center items-center"
              key={img.id}
            >
              <a href="FormPredeterminados.jsx">
                <img
                  key={img.id}
                  src={`http://localhost:8083${img.ruta}`}
                  alt={`imagen-${img.id}`}
                  style={{
                    width: "200px",
                    height: "auto",
                    border: "1px solid #ccc",
                  }}
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
