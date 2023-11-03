import React from "react";
import { MYDOCUMENTS } from "../Mocks";
import { Tooltip } from "react-tooltip";
export function ListRow() {
  return MYDOCUMENTS.map((docs) => (
    <>
      <a
        href="#"
        key={docs.Title + "" + docs.Date}
        data-tip="Click para abrir o documento"
        className="my-anchor-element bg-white max-w-full flex flex-row gap-1 shadow-md p-3 cursor-pointer hover:bg-gray-50 duration-75 space-x-4 rounded-lg"
      >
        <div className="w-8 h-8">
          <img src={docs.Icon} alt={docs.Title} />
        </div>
        <div className="flex flex-col justify-between gap-1 flex-1">
          <div className="flex flex-row justify-between items-center gap-1">
            <strong className="text-sm text-gray-800">{docs.Title}</strong>
            <p className="text-sm text-gray-500">{docs.Date}</p>
          </div>
          <span className="text-sm text-gray-500 font-light">
            {docs.Departament}
          </span>
        </div>
      </a>
      <Tooltip anchorSelect=".my-anchor-element" place="top">
        Clique aqui para abrir o documento
      </Tooltip>
    </>
  ));
}
