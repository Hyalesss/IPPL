import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const darkTheme = {
        naturalLightMode: "#333",
        naturalWhiteText: "#fff",
        primary100: "#e7ebe0",
        primaryBaseColor: "#94a684",
        secondaryInfo: "#646ba6",
    };

    const lightTheme = {
        naturalLightMode: "#f2f2f2",
        secondaryInfo: "#646ba6",
        colorGray: "rgba(0, 0, 0, 0.2)",
        primary950: "#283321",
        primaryBaseColor: "#94a684",
        primary100: "#e7ebe0",
     };
    
     const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};