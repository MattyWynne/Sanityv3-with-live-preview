'use client'

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react'

interface ContextProps {
  status: string
  setStatus: Dispatch<SetStateAction<string>>
}

const GlobalStatusContext = createContext<ContextProps>({
  status: '',
  setStatus: (): string => '',
})

export const GlobalStatusContextProvider = ({ children }) => {
  const [status, setStatus] = useState('1')

  return (
    <GlobalStatusContext.Provider value={{ status, setStatus }}>
      {children}
    </GlobalStatusContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalStatusContext)
