import { useState, useContext } from "react";
import { lightTheme, darkTheme } from "../../styles/theme";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
    return useContext(ThemeContext);
  };
