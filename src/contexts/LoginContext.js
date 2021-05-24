import React, { useState } from 'react'
import { createContext } from "react";
export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
    const [IsLogInModalShown, setIsLogInModalShown] = useState(false);
    const [IsSignUpModalShown, setIsSignUpModalShown] = useState(false);


    const [IsLoggedIn, setIsLoggedIn] = useState(false);
    const [Token, setToken] = useState();
    const [User, setUser] = useState();

    const ToggleLoginModal = () => {
        setIsLogInModalShown(!IsLogInModalShown);
    }
    const ToggleSignUpModal = () => {
        setIsSignUpModalShown(!IsSignUpModalShown);
    }


    const login = (token, input_user) => {

        setToken(token)
        setUser(input_user)
        localStorage.setItem(
            'userData',
            JSON.stringify({
                user: input_user,
                token: token,
            })
        );

        setIsLoggedIn(true)
        const togler = document.getElementById("members_only_link");
        togler.classList.toggle("shaker");



    }

    const logout = () => {
        setIsLoggedIn(false)
        setToken(null)
        localStorage.removeItem('userData');
        const togler = document.getElementById("members_only_link");
        togler.classList.toggle("shaker");
    };




    return (
        <LoginContext.Provider value={{ IsLoggedIn, login, logout, Token, ToggleLoginModal, IsLogInModalShown, IsSignUpModalShown, ToggleSignUpModal, User }}>
            { children}
        </LoginContext.Provider >
    );
};