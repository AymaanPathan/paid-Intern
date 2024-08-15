/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-refresh/only-export-components */
import { useState, createContext } from "react";

export const DarkModeContext = createContext(null);

const DarkModeContextProvider = (props) => {
  const [isDark, setIsDark] = useState(false);
  const handleDarkMode = () => {
    setIsDark(!isDark);
  };
  return (
    <DarkModeContext.Provider value={{ handleDarkMode, isDark, setIsDark }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
