import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { api } from "../../../lib/api"
import { login } from "../../../reducers/user"
import { EmailCreate } from "../EmailCreate"
import { UsernameCreate } from "../UsernameCreate"


interface LoginCreateProps{
  testCloseDialog: () => void
}

export function LoginCreate({testCloseDialog}: LoginCreateProps){
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[confirmPassword,setConfirmPassword] = useState("")
  const[username, setUser] = useState("")
  const[createUsernameStep, setCreateUsernameStep] = useState("INPUT_EMAIL")
  const[createUsernameError, setCreateUsernameError] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()

  async function handleRequestLogin(event: FormEvent){
    event?.preventDefault()
    
    if (createUsernameStep === "INPUT_EMAIL") {
      try {
        await api.get('/request-email',{
          params:{
            email,
          }
        })
         .then(() => setCreateUsernameStep("INPUT_USERNAME"))
      }
      catch (e){
        setCreateUsernameError("EMAIL_ALREADY_EXISTS")
      }
    }
    else if (createUsernameStep === "INPUT_USERNAME") {
      try {
        await api.get('/request-username', {
          params:{
            username,
          }
        })
        .then(async() => {
          const response = await api.post('/create', {
            username,
            email,
            password
          })
          dispatch(login({
            username,
            email,
            userId: response.data.userProfileId,
            accountId: response.data.userAccountId,
            auth_token: response.data.cookie,
            loggedIn: true,
          }))
          navigate('/home')
        })
      }
      catch (e){
        setCreateUsernameError("USERNAME_ALREADY_EXISTS")
      }
    }
  }



  return(
    <form className="flex flex-col items-center" onSubmit={handleRequestLogin}>
      <span className="pb-6 font-sans font-extrabold text-2xl">Criar conta no Passarinho</span>

      {
        createUsernameStep  === "INPUT_EMAIL" ?(
          <EmailCreate
          setEmailProp={setEmail}
          createUsernameStepProp ={createUsernameError}
          /> 
        ) :
        <>
          <UsernameCreate 
          setPasswordProp={setPassword}
          setConfirmPasswordProp={setConfirmPassword}
          setUserProp={setUser}
          createUsernameStepProp ={createUsernameError}
          />
          <span className="text-red-600 text-sm font-sans min-h-[20px]">
          {
            password.length <=7 || confirmPassword.length <=7 || password != confirmPassword && "Senhas não coincidem"
          }
          </span>
        </>
      }



      <button 
        className="mt-8 flex items-center justify-center w-96 h-12 rounded-full border m-4 bg-cyan-100 disabled:bg-cyan-50 disabled:text-gray-600"
        disabled={createUsernameStep  === "INPUT_USERNAME" &&( password.length <=7 || confirmPassword.length <=7 || password != confirmPassword || username.length === 0)}
      >
        <span className="font-sans font-bold text-lg">Criar</span>
      </button>

    </form>
  )
}