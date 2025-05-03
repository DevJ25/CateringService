import React, { useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
} from "@headlessui/react";
import register from "../../assets/register.jpg";
import { SocialLinks } from "../Pages/socials";

export const RegisterFormModal = ({ isOpen, onClose, switchToLogin }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    password: "",
    celular: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construye el objeto que espera Spring Boot
    const cliente = {
      name: formData.nombre,
      lastName: formData.apellidos,
      correo: formData.email,
      password: formData.password,
      phone: formData.celular,
    };

    try {
      const response = await fetch("http://localhost:8083/api/clientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cliente),
      });

      if (response.ok) {
        alert("Cliente registrado exitosamente");
        setFormData({
          nombre: "",
          apellidos: "",
          email: "",
          password: "",
          celular: "",
        });
      } else {
        alert("Error al registrar el cliente");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4">
        <DialogPanel className="max-w-md w-full bg-white p-6 rounded-xl shadow-lg space-y-4">
          <DialogTitle className="text-xl font-bold text-center">
            Registarse
          </DialogTitle>
          <Description className="text-sm text-gray-500 text-center">
            Ingrese sus datos para Registrase
          </Description>
          <div className="flex flex-row gap-4 justify-center">
            <div className="w-[40%] h-auto flex justify-center ">
              <figure>
                <img src={register} alt="" />
              </figure>
            </div>
            <div className="w-[60%] h-auto flex flex-col gap-6 justify-center ">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-full "
              >
                <div className="w-full">
                  <input
                    type="text"
                    className="w-full flex items-center rounded-xs border border-[#9d9a9a] text-sm p-0.5"
                    id="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ingrese su nombre"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    className="w-full flex items-center rounded-xs border border-[#9d9a9a] text-sm p-0.5"
                    id="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    placeholder="Ingrese sus apellidos"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    className="w-full flex items-center rounded-xs border border-[#9d9a9a] text-sm p-0.5"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ingrese su correo electrónico"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="password"
                    className="w-full flex items-center rounded-xs border border-[#9d9a9a] text-sm p-0.5"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Ingrese su contraseña"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="tel"
                    className="w-full flex items-center rounded-xs border border-[#9d9a9a] text-sm p-0.5   "
                    id="celular"
                    value={formData.celular}
                    onChange={handleChange}
                    placeholder="Ingrese su número de celular"
                  />
                </div>
                <div className="flex flex-row gap-2 justify-center items-center w-full">
                  <button
                    type="submit"
                    className="bg-amber-500 rounded-2xl p-2 cursor-pointer"
                  >
                    Registrarse
                  </button>
                  <button
                    onClick={switchToLogin}
                    className="text-sm text-gray-900 hover:text-black bg-blue-300 rounded-2xl p-2 cursor-pointer"
                  >
                    Iniciar Sesion
                  </button>
                </div>
                <SocialLinks />
              </form>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
