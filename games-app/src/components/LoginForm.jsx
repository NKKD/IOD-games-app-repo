import { useState} from "react";
import { useUserContext } from "../context/UserContext";
import { useThemeContext } from "../context/ThemeContext";
import GamesList from "./GamesList.jsx";
import ToggleThemeButton from "./ToggleTheme.jsx";
import "../css/games-app.css";

export default function LoginForm() {
    const [userEmail, setUserEmail] = useState('test@test.com');
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
        } else if(userEmail == "test@test.com" && userPassword == "test1") {
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
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div>
                        <div className="card-body body">
                            <h1 className="card-title">Welcome to games app</h1>
                            <form onSubmit={(e) => handleLoginFormSubmit(e)}>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        defaultValue="test@test.com"
                                        onChange={(e) => setUserEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        defaultValue="test1"
                                        onChange={(e) => setUserPassword(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <button type="submit" className="login-button btn btn-primary">Sign in</button>
                                </div>
                                <div className="form-group">
                                    <span>{submitResult}</span>
                                </div>
                            </form>
                            <div className="mt-3">
                                <ToggleThemeButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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