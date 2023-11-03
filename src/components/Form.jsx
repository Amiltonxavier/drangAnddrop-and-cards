import React from "react";
import { DragAndDrop } from "./DragAndDrop";

export function Form() {
  return (
    <form action="" className="p-4 bg-white m-auto w-full">
      <div className="">
        <div>
          <label
            for="small-input"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Título
          </label>
          <input
            type="text"
            id="small-input"
            value={"Amilton Pascoal Xavier"}
            disabled
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:outline-none focus:ring focus:border-blue-50"
          />
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="small-input"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Responsavel
            </label>
            <input
              type="text"
              id="small-input"
              value={"Amilton Pascoal Xavier"}
              disabled
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:outline-none focus:ring focus:border-blue-50 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500"
            />
          </div>
          <div>
          <label
            for="small-input"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Departamento
          </label>
          <input
            type="text"
            id="small-input"
            disabled
            value={"Recursoss Humanos"}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:outline-none focus:ring focus:border-blue-50 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500"
          />
        </div>
        </div>

        <div>
          <label
            for="small-input"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Precedência
          </label>
          <input
            type="text"
            id="small-input"
            value={"Recursos Humanos"}
            disabled
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:outline-none focus:ring focus:border-blue-50 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </div>

        <div>
          <label
            for="small-input"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Responsavel
          </label>
          <input
            type="text"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:outline-none focus:ring focus:border-blue-50"
          />
        </div>
        <div className="mt-4">
          <DragAndDrop />
        </div>
      </div>
      <button
        type="submit"
        className="w-full py-2 text-sm bg-blue-500 text-white shadow-md rounded-md my-4"
      >
        Entrar
      </button>
    </form>
  );
}
