import { ReactNode, createContext, useState, useContext } from "react";

import { UserData, UserDataContextType } from "./types";

export const Context = createContext({});

interface Props {
  children: ReactNode;
}

export const useUserContext = (): UserDataContextType => {
  const context = useContext(Context) as UserDataContextType
  return context
}


export const UserDataContextProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState<UserData>();

  return (
    <Context.Provider value={{ userData, setUserData }}>
      {children}
    </Context.Provider>
  );
};

export default Context
