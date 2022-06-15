
interface loginButtonProps{
    loginText: string;
    loginDirectFunction: () => void;
}

export function LoginButton({ loginText, loginDirectFunction }: loginButtonProps){

  return(
    <button 
     className="flex items-center justify-center w-96 h-12 rounded-full border gap-2 my-4 bg-cyan-100"
     onClick={loginDirectFunction}
    >
        <span className="font-sans">{loginText}</span>
    </button>
  )

}