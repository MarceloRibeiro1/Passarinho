import { Dialog } from "@headlessui/react";
import { TwitterLogo, X } from "phosphor-react";
import { LoginByEmail } from "../LoginByEmail";
import { LoginCreate } from "../LoginCreate";

interface LoginDialogProps{
    toggleLoginDialog: ()=> void;
    currentDialog: string;
}

export function LoginDialog( { toggleLoginDialog, currentDialog }: LoginDialogProps){

  return(
    <Dialog 
     open={true} 
     onClose={toggleLoginDialog} 
     className="fixed inset-0 flex items-center justify-center bg-opacity-70 bg-slate-200"
    >
      <Dialog.Panel
        className="relative flex flex-col content-center justify-center bg-white rounded-lg p-5"
      >
        <Dialog.Title className="flex justify-between pb-2 items-center"><button onClick={toggleLoginDialog}><X className="w-6 h-6"/></button><TwitterLogo weight="fill" className="text-cyan-200 w-10 h-10" /><div className=""></div></Dialog.Title>
          {
            currentDialog === "CREATE_NEW_ACCOUNT" ?
            <LoginCreate 
             testCloseDialog={toggleLoginDialog}
            /> :
            <LoginByEmail 
             testCloseDialog={toggleLoginDialog}
            />
          }

      </Dialog.Panel>
    </Dialog>
  )
}