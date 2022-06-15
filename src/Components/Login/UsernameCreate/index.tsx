import { useState } from "react"

interface UsernameCreateProps{
    setPasswordProp: (type: string) => void,
    setConfirmPasswordProp: (type: string) => void,
    setUserProp: (type: string) => void,
    createUsernameStepProp: string,
}

export function UsernameCreate({ setPasswordProp, setConfirmPasswordProp, setUserProp, createUsernameStepProp }: UsernameCreateProps){

    return(
        <>
            <div className="flex flex-col font-sans text-sm border-solid border-2 border-inherit rounded-md px-2 pb-1 w-3/4 mt-4">
                <span>
                    Usuário
                </span>
                <input
                    type="text"
                    placeholder="Usuário"
                    onChange={(event) => {setUserProp(event.target.value)}}
                    className="text-base focus:outline-none"
                />
            </div>
            {
                createUsernameStepProp === "USERNAME_ALREADY_EXISTS" ?
                <span className="text-red-600 text-sm font-sans min-h-[20px]">Usuário já existe</span> :
                <span className="text-red-600 text-sm font-sans min-h-[20px]"></span>

            }

            <div className="flex flex-col font-sans text-sm border-solid border-2 border-inherit rounded-md px-2 pb-1 w-3/4 mt-3">
                <span>
                    Senha
                </span>
                <input
                    type="password"
                    placeholder="senha"
                    onChange={(event) => {setPasswordProp(event.target.value)}}
                    className="text-base focus:outline-none"
                />
            </div>
            <div className="flex flex-col font-sans text-sm border-solid border-2 border-inherit rounded-md px-2 pb-1 w-3/4 mt-4">
                <span>
                    Confirme a Senha
                </span>
                <input
                    type="password"
                    placeholder="senha"
                    onChange={(event) => {setConfirmPasswordProp(event.target.value)}}
                    className="text-base focus:outline-none"
                />
            </div>

        </>
    )
}