import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [accesUser, setAccesUser] = useState(true);
  const [accesTeam, setAccesTeam] = useState(false);
  return (
    <AppContext.Provider value={{ accesUser, setAccesUser, accesTeam, setAccesTeam }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
