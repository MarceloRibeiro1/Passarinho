import { House } from "phosphor-react";
import { useNavigate } from "react-router-dom";


export function HeaderButtomHome(){
  const navigate = useNavigate()
  return(
    <button 
     className="flex items-center w-11/12 h-12 rounded-full hover:bg-gray-300 p-2"
     onClick={() => navigate("/home")}
    >
      <div className="flex items-center flex-row gap-4 overflow-hidden ">
        <House className="w-6 h-6 flex-shrink-0"/>
        <span className="font-sans text-lg font-bold px-2 overflow-hidden flex-shrink">
            Página Inicial
        </span>
      </div>
    </button>
  )

}