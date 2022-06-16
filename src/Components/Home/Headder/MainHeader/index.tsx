import { DotsThree, TwitterLogo } from "phosphor-react";
import { HeaderButtomProfile } from "../HeaderButtoms/HeaderButtomProfile";
import { HeaderButtomExplore } from "../HeaderButtoms/HeaderButtomExplore";
import { HeaderButtomHome } from "../HeaderButtoms/HeaderButtomHome";
import { HeaderButtomMessage } from "../HeaderButtoms/HeaderButtomMessage";
import { HeaderButtomNotification } from "../HeaderButtoms/HeaderButtomNotification";
import { useSelector } from "react-redux";
import { logout, selectUser } from "../../../../reducers/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export function MainHeader(){
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function userLogout(){
        dispatch(logout())
        navigate("/")
        
    }
    return (
    <header className="flex flex-col justify-between h-screen w-3/12 xl:w-6/12 items-end">
    <div className="fixed w-fit flex flex-col justify-between items-end h-screen px-2 py-4 flex-shrink-0">
        <div className="flex flex-col w-64 gap-1 xl:items-start items-end">
            <button className="w-fit hover:bg-cyan-100 rounded-full">
                <div className=" p-3">
                    <TwitterLogo className="text-cyan-300 w-8 h-8" weight="fill"/>
                </div>
            </button>
            <div className="flex flex-col gap-1 w-12 xl:w-full">
                <HeaderButtomHome />
                <HeaderButtomExplore />
                <HeaderButtomNotification />
                <HeaderButtomMessage />
                <HeaderButtomProfile />
            </div>
            <div className="w-12 xl:w-full">
                <button 
                className="flex items-center w-11/12 h-12 rounded-full bg-cyan-300 hover:bg-cyan-400 p-2 justify-center cursor-not-allowed"
                >
                  <span className="font-sans text-base xl:text-xl font-bold px-2 text-white">
                    Tweet
                  </span>
                </button>
            </div>
        </div>



        <button className="flex p-4 rounded-full hover:bg-slate-200 w-20 h-20 xl:w-full items-end overflow-hidden" onClick={userLogout}>
            <div>
                <TwitterLogo className="text-cyan-200 w-12 h-12" weight="fill"/>
            </div>
            <div className="grow px-2">
                <div>
                    {
                        user.loggedIn ?  user.username : ""
                    }
                </div>
                <div className="font-sans font-thin">Desaja Sair?</div>
            </div>
            <div className="flex items-center">
                <DotsThree className="w-8 h-8"/>
            </div>
        </button>



    </div>
    </header>
    )
}
