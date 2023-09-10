import React from "react";
import { useState } from "react";
import { useContext } from "react";

const ThemeContext = React.createContext({
    currentTheme: "light", // default value
    handleUpdateTheme: () => {},
    checkCurrentTheme: () => {},
});


export const ThemeProvider = (props) => {
    // set use state for currentTheme
    const [currentTheme, setCurrentTheme] = useState("light");

    // Function to check the current theme
    const handleUpdateTheme = (theme) => {
        setCurrentTheme(theme);
    }

    // create a function that check the current theme
    const checkCurrentTheme = () => {
        console.log('theme:', JSON.stringify(currentTheme))
    }

    // provide the content, which returns the below properties
    return (
        <ThemeContext.Provider value={{ currentTheme, handleUpdateTheme, checkCurrentTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}
// use the content and give a wrapper function
export const useThemeContext = () => {
    return useContext(ThemeContext);
}