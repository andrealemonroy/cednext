import { createContext } from 'react';

const initialState = {
  hola: "mundo"
}

export const UIContext = createContext(initialState);

export const UIProvider = (props)=>{


  return <UIContext.Provider value={{}} {...props} />
}

export const ManagedUIContext = ({ children }) => (
  <UIProvider >
    {children}
  </UIProvider>
)