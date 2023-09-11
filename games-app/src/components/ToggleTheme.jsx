// ToggleThemeButton.js
import React from 'react';
import { useThemeContext } from '../context/ThemeContext';
import "../css/games-app.css";

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
        <button type="button" className="btn btn-secondary toggle-button" onClick={toggleTheme}>Toggle Theme</button>
    );
}

export default ToggleThemeButton;
