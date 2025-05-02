import React from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
} from "@headlessui/react";

export const InicioSesion = () => {
  return (
    <>
      <Dialog
        open={true}
        onClose={() => {}}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen p-4 bg-black/30 backdrop-blur-sm">
          <DialogPanel className="w-full max-w-md p-6 mx-auto bg-white rounded-lg shadow-lg">
            <DialogTitle className="text-2xl font-bold text-center">
              Iniciar Sesión
            </DialogTitle>
            <Description className="mt-4 text-center">
              Bienvenido de nuevo. Inicia sesión para continuar.
            </Description>
            <form className="mt-6 space-y-4">
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full p-2 border rounded"
                required
              />
              <button
                type="submit"
                className="w-full p-2 text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Iniciar Sesión
              </button>
              <button
                type="button"
                className="w-full p-2 text-white bg-red-600 rounded hover:bg-red-700"
              >
                Registrarse
              </button>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
