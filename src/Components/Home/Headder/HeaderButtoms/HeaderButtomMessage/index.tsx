import { Envelope } from "phosphor-react";

export function HeaderButtomMessage(){

    return(
      <button 
       className="flex items-center w-11/12 h-12 rounded-full hover:bg-gray-300 p-2 cursor-not-allowed overflow-hidden"
      >
        <div className="w-fit flex items-center gap-4 overflow-hidden">
          <Envelope className="w-6 h-6 flex-shrink-0"/>
          <span className="font-sans text-lg font-bold px-2">
            Mensagens
          </span>
        </div>
      </button>
    )
  
  }