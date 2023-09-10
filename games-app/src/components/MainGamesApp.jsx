import "../css/games-app.css";
import { useEffect } from "react";
import { UserProvider } from '../context/UserContext'
import LoginForm from '../components/LoginForm'
import { ThemeProvider, useThemeContext } from '../context/ThemeContext'

function AppContent() {
    const { currentTheme } = useThemeContext();

    useEffect(() => {
        document.body.setAttribute('data-theme', currentTheme);
    }, [currentTheme]);

    return <LoginForm />;
}

export default function MainGamesApp() {

    return(
        <>
            <UserProvider>
                <ThemeProvider>
                    <AppContent/>
                </ThemeProvider>
            </UserProvider>
        </>
    )
}