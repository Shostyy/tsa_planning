import React, { useEffect } from "react";
import { useAuth } from './AuthContext'; // Import the useAuth hook
import './LoginPopup.scss';

export const LoginPopup = () => {
    const { login, logout } = useAuth();

    useEffect(() => {
        const closePopup = () => {
            document.getElementById("close-button").click();
        };
    
        if (login) {
            closePopup();
        }
    }, [login]); // Replace with the actual condition for successful authentication
    

    const handleLogin = () => {
        login(); // Call the login function when the user submits the login form
    };

    const handleLogout = () => {
        logout(); // Call the logout function when the user clicks the logout button
    };

    return (
        <div className="login-pop-up" id="login-form">
            <div className="login-pop-up__description-block">
                <p className="login-pop-up__description-text">
                    Кабінет Клієнта
                </p>
                <a href="#" className="login-pop-up__close-button" id="close-button"></a>
            </div>
            <form action="#" className="login-pop-up__form">
                <label htmlFor="login" className="login-pop-up__label">
                    Логін
                </label>
                <input type="text" id="login" name="login" className="login-pop-up__input" />

                <label htmlFor="password" className="login-pop-up__label">
                    Пароль
                </label>
                <input type="password" id="password" name="password" className="login-pop-up__input" />
                <button type="button" className="login-pop-up__button" onClick={handleLogin}>
                    Увійти
                </button>
            </form>
            <a href="#" className="login-pop-up__refresh-password">
                Відновити пароль
            </a>
        </div>
    );
};

export default LoginPopup;
