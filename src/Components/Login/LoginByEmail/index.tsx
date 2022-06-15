import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { api } from "../../../lib/api"
import { login } from "../../../reducers/user"

interface LoginEmailProps{
  testCloseDialog: () => void
}

export function LoginByEmail({testCloseDialog}: LoginEmailProps){
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[loginError,setLoginError] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  async function handleRequestLogin(event: FormEvent){
    event?.preventDefault()
    
    try {
       const response = await api.post('/login',{
          email,
          password
      })
      dispatch(login({
        username: response.data.username,
        email,
        userId: response.data.userProfileId,
        accountId: response.data.userAccountId,
        auth_token: response.data.cookie,
        loggedIn: true,
      }))
      navigate('/home')
    }
    catch (e){
      console.error(e)
      setLoginError(true)
    }

  }



  return(
    <form className="flex flex-col items-center" onSubmit={handleRequestLogin}>
      <span className="pb-6 font-sans font-extrabold text-2xl">Entrar no Passarinho</span>

      <div className="flex flex-col font-sans text-sm border-solid border-2 border-inherit rounded-md px-2 pb-1 w-3/4 mt-4">
        <span>
            Email
        </span>
        <input
            type="email"
            placeholder="email"
            onChange={(event) => {setEmail(event.target.value)}}
            className="text-base focus:outline-none"
        />
      </div>


      <div className="flex flex-col font-sans text-sm border-solid border-2 border-inherit rounded-md px-2 mb-8 pb-1 w-3/4 mt-4">
        <span>
            Senha
        </span>
        <input
            type="password"
            placeholder="senha"
            onChange={(event) => {setPassword(event.target.value)}}
            className="text-base focus:outline-none"
        />
      </div>

      {
        loginError ?
        <span className="text-red-600 text-sm font-sans min-h-[20px]">
          Email ou senha incorreto
        </span>:
        <span className="text-red-600 text-sm font-sans min-h-[20px]"></span>

      }

      <button 
        className="flex items-center justify-center w-96 h-12 rounded-full border m-4 bg-cyan-100 disabled:bg-cyan-50 disabled:text-gray-600"
        disabled={email.length === 0 || password.length <= 0}
      >
        <span className="font-sans font-bold text-lg">Entrar</span>
      </button>

    </form>
  )
}