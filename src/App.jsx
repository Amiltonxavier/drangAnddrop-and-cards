import React from "react";
import { DragAndDrop } from "./components/DragAndDrop";
import { ListRow } from "./components/ListRow";
import { Form } from "./components/Form";




export function App(){

  return (
    <section className="w-full h-screen bg-slate-100">
        <div className="grid grid-cols-2 gap-1">
          <div className=" h-screen flex flex-col items-center justify-center gap-2 px-4">
          <input type="text" name="" id="" className="shadow-lg rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border border-gray-300" placeholder="Procurar Documentos" />
            <div className="w-full flex flex-col gap-2">
                <ListRow className="max-w-full" />
            </div>
          </div>
        
            <div className="px-2 flex items-center justify-center">
            <Form />
            </div>
        </div>
    </section>
   
  );
};

export default App;
