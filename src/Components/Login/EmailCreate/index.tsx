interface EmailCreateProps{
    setEmailProp: (type: string) => void,
    createUsernameStepProp: string
}

export function EmailCreate({ setEmailProp, createUsernameStepProp }: EmailCreateProps){


return(
    <>
      <div className="flex flex-col font-sans text-sm border-solid border-2 border-inherit rounded-md px-2 pb-1 w-3/4 mt-4">
        <span>
            Email
        </span>
        <input
            type="email"
            placeholder="email"
            onChange={(event) => {setEmailProp(event.target.value)}}
            className="text-base focus:outline-none"
        />
      </div>
      {
        createUsernameStepProp === "EMAIL_ALREADY_EXISTS" ?
        <span className="text-red-600 text-sm font-sans min-h-[20px]">Email já existe</span> :
        <span className="text-red-600 text-sm font-sans min-h-[20px]"/>

      }



    </>
)
}