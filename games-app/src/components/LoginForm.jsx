import { useState} from "react";
import { useUserContext } from "../context/UserContext";
import { useThemeContext } from "../context/ThemeContext";
import GamesList from "./GamesList.jsx";
import ToggleThemeButton from "./ToggleTheme.jsx";
export default function LoginForm() {
    const [userEmail, setUserEmail] = useState('test');
    const [userPassword, setUserPassword] = useState('test1');
    const [submitResult, setSubmitResult] = useState('');

    const { currentUser, handleUpdateUser, isUserLoggedIn } = useUserContext();
    const { currentTheme, handleUpdateTheme, checkCurrentTheme } = useThemeContext();

    const handleLoginFormSubmit = (e) => {
        e.preventDefault();
        if (userPassword.length < 1) {
            setSubmitResult('Password must be at least 1 chars long');
        } else if (userPassword === userEmail) {
            setSubmitResult('Password must not match email address');
        } else if(userEmail === "test" && userPassword === "test1") {
            /*the hardcoded userEmail and userPassword values are for demo purpose only. Never hardcode username/passwords in real apps*/
            setSubmitResult('Successful login.');
            handleUpdateUser({ email: userEmail }); // context function
        }
        else {
            setSubmitResult('Invalid username of password');
        }
        console.log("isUserLoggedIn()", isUserLoggedIn());
    }

    const handleLogout = () => {
        handleUpdateUser({});
        setUserEmail("");
        setUserPassword("");
    }

    let loginFormJsx = (
        <div>
            <h1>Sign in</h1>
            <input type="email" defaultValue="test" onChange={(e)=>{setUserEmail(e.target.value)}} /> <br/>
            <input type="password" defaultValue="test1" onChange={(e)=>{setUserPassword(e.target.value)}} /> <br/>
            <button onClick={(e) => handleLoginFormSubmit(e)}>Sign in</button>
            <br/>
            <span>{submitResult}</span>
            <ToggleThemeButton />
        </div>
    );

    if (isUserLoggedIn())
        return (
            <>
                <GamesList/>
            </>);
    else
        return ( loginFormJsx );

}