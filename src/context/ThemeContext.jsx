import React, { createContext, useCallback, useMemo, useState } from "react";

const supportedThemes = ["light", "dark"];
const THEME_LOCAL_STORAGE_KEY = "theme";

const ThemeContext = createContext("light");
export default ThemeContext;

const isValid = (themeValue) => {
  return supportedThemes.includes(themeValue) && themeValue;
};

const initialTheme = () => {
  return isValid(localStorage.getItem(THEME_LOCAL_STORAGE_KEY)) || "light";
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme());

  const toggleTheme = useCallback(() => {
    const newThemeValue = theme === "light" ? "dark" : "light";
    setTheme(newThemeValue);
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newThemeValue);
  }, [theme]);

  const value = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme, toggleTheme]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
