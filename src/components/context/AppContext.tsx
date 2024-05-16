import React, { createContext, ReactNode, useState } from 'react'
import messages_br from '../../messages/texts-pt-br.json'

// user props type
type UserType = {
  language: string
  messages: any
}

// context props type
type PropsUserContext = {
  state: UserType
  setState: React.Dispatch<React.SetStateAction<UserType>>
}

interface IUserContextProvider {
  children: ReactNode
}

//initial state value
const DEFAULT_VALUE = {
  state: {
    language: 'pt-BR',
    messages: messages_br,
  },
  setState: () => {},
}

//create context
const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE)

//function to change language of the context
const UserContextProvider = ({ children }: IUserContextProvider) => {
  const [state, setState] = useState(DEFAULT_VALUE.state)
  return (
    <UserContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserContextProvider }
export default UserContext
