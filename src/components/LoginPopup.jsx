import React, { useEffect, useState } from "react";
import './LoginPopup.scss';

export const LoginPopup = () => {
    const [cookieExists, setCookieExists] = useState(() => {
        const cookies = document.cookie.split(';');
        return cookies.some(cookie => cookie.trim().startsWith('login='));
    });

    const setCookie = () => {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 1);
        document.cookie = `login=true; expires=${expirationDate}; path=/;`;
        setCookieExists(true);
        const forceUpdate = () => {
            setCookieExists(true);
        };
        forceUpdate();
    };

    const clearCookie = (cookieName) => {
        const expirationDate = new Date();
        expirationDate.setFullYear(expirationDate.getFullYear() - 1);
        document.cookie = `${cookieName}=; expires=${expirationDate.toUTCString()}; path=/;`;
        setCookieExists(false);
        
    };
    
    
    return (
        <div className="login-pop-up" id="login-form">
            <div className="login-pop-up__description-block">
                <p className="login-pop-up__description-text">
                    Кабінет Клієнта
                </p>
                <a href="#" className="login-pop-up__close-button"></a>
            </div>
            <form action="#" className="login-pop-up__form">
                <label htmlFor="login" className="login-pop-up__label">
                    Логін
                </label>
                <input type="text" id="login" name="login"  className="login-pop-up__input"/>

                <label htmlFor="password" className="login-pop-up__label">
                    Пароль
                </label>
                <input type="password" id="password" name="password"  className="login-pop-up__input"/>
                <button type="submit" value="Submit" className="login-pop-up__button" onClick={setCookie}>Увійти</button>
            </form>
            <a href="#" className="login-pop-up__refresh-password">
                Відновити пароль
            </a>
        </div>
    );
}