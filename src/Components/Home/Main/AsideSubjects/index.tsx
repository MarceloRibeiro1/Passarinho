import { MagnifyingGlass } from "phosphor-react";
import { Assuntos } from "../Hashes/Assuntos";

export function AsideSubjects(){
    return(
      <div className="flex-grow-0 flex-shrink overflow-hidden w-0 lg:w-fit">
        <div className="p-4">
          <div className="bg-gray-200 rounded-xl w-full flex p-2 items-center">
            <MagnifyingGlass className="w-7 h-7"/>
            <input placeholder="Pesquisar" className="bg-transparent p-1 flex-1 focus:outline-none"/>
          </div>
        </div>
        <div className="bg-gray-200 rounded-xl py-4 m-4">
          <span className="font-sans font-extrabold text-lg px-4">O que está acontecendo</span>
          <div className="hover:cursor-not-allowed">
            <Assuntos />
            <Assuntos />
            <Assuntos />
            <Assuntos />
          </div>
        </div>
      </div>
    )
}