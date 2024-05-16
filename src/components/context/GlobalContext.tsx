import { ReactNode } from 'react'

import { UserContextProvider } from './AppContext'

interface IGlobalContent {
  children: ReactNode
}

const GlobalContext = ({ children }: IGlobalContent) => {
  return (
    <>
      <UserContextProvider>{children}</UserContextProvider>
    </>
  )
}

export default GlobalContext
