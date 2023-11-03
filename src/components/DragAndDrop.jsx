import React, { useCallback } from 'react'
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";

export function DragAndDrop() {
    const acceptedFileTypes = "application/pdf";
    const onDrop = useCallback((acceptedFiles) => {
        // manipulação do arquivo
        console.log(acceptedFiles);
      }, []);
    
      const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: acceptedFileTypes,
      });
  return (
    <div
    {...getRootProps()}
    className={`bg-gray-100 m-auto w-full h-52 flex justify-center items-center p-2 border-2 border-dashed rounded-lg  border-gray-300 hover:border-blue-500 hover:bg-gray-200 duration-75 ${
      isDragActive ? "border-blue-500" : "border-gray-500"
    }`}
  >
    <div
      className={`w-36 h-full flex flex-col items-center justify-center text-gray-400 `}
    >
      <input {...getInputProps()} />
    
        <p>Solte para adicionar</p>
   
          <AiOutlineCloudUpload
            size={30}
            className={`w-10 h-10 mb-3 ${
              isDragActive ? "text-blue-500" : "text-gray-500"
            }`}
          />
          <p className="text-center">Arraste e solte arquivos PDF aqui</p>
          <p className="text-center">Apenas arquivos PDF são permitidos</p>
    
      
    </div>
  </div>
  )
}
