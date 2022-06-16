import { TwitterLogo } from "phosphor-react"
import { useState } from "react"
import { LoginButton } from "../../Components/Login/LoginButton"
import { LoginDialog } from "../../Components/Login/LoginDialog"

function LoginPage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [loginMedium, setloginMedium] = useState("")

  function handleLoginMedium(medium: string){
    setloginMedium(medium);
    setIsLoginOpen(true);
  }

  return (  
    <div className="w-screen h-screen flex">
      
      <div className="bg-cyan-200 h-screen md:w-1/2 w-0 flex items-center justify-center flex-grow-0">
        <TwitterLogo className="w-1/2 h-1/2 text-white" weight="fill" />
      </div>

      <div className="flex flex-col min-w-fit md:px-14 px-24 py-7 justify-start flex-1">
        <TwitterLogo className="text-cyan-200 w-20 h-20" weight="fill" />
        <span className="font-sans font-extrabold text-5xl my-8">Acontecendo agora</span>
        <span className="font-sans font-bold text-2xl my-6">Inscreva-se no passarinho hoje mesmo</span>
        
        <div className="flex flex-col items-center w-fit py-4">
          <LoginButton
            loginText="Inscreva-se pelo email"
            loginDirectFunction={() => {
              handleLoginMedium("CREATE_NEW_ACCOUNT")
              console.log(import.meta.env.VITE_API_URL)
            }}
          />

          <span className="py-4">Já tem uma conta?</span>
          <LoginButton
            loginText="Login"
            loginDirectFunction={() => handleLoginMedium("LOGIN_BY_EMAIL")}
          />
        </div>
      </div>

      {
        isLoginOpen ?
        <LoginDialog
        toggleLoginDialog={() => setIsLoginOpen(false)}
        currentDialog={loginMedium}
        /> :
        <></>
      }

    </div>
  )
}

export default LoginPage