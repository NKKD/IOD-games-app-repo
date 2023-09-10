// ToggleThemeButton.js
import React from 'react';
import { useThemeContext } from '../context/ThemeContext';

const ToggleThemeButton = () => {
    const { currentTheme, handleUpdateTheme, checkCurrentTheme } = useThemeContext();

    const toggleTheme = () => {
        if (currentTheme === "light") {
            handleUpdateTheme("dark");
        } else {
            handleUpdateTheme("light");
        }
        checkCurrentTheme();
    };

    return (
        <button onClick={toggleTheme}>Toggle Theme</button>
    );
}

export default ToggleThemeButton;
