import React from "react";
import { useState } from "react";
import { useContext } from "react";

const UserContext = React.createContext();

export const UserProvider = (props) => {
    // set use state for currentUser
    const [currentUser, setCurrentUser] = useState({});
    // create a wrapper function for set state (set current user)
    const handleUpdateUser = (user) => {
        setCurrentUser(user);
    }
    // create a function that check if the user has logged in or not
    const isUserLoggedIn = () => {
        console.log('user:', JSON.stringify(currentUser));
        return !!currentUser?.email;
    }
    // provide the content, which returns the below properties
    return (
        <UserContext.Provider value={{ currentUser, handleUpdateUser, isUserLoggedIn }}>
            {props.children}
        </UserContext.Provider>
    );
}
// use the content and give a wrapper function
export const useUserContext = () => {
    return useContext(UserContext);
}