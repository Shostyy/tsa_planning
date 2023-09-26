import React, { useEffect, useState } from "react";
import './Header.scss';

export const Header = () => {
    const [cookieExists, setCookieExists] = useState(false);

    useEffect(() => {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith('login=')) {
                setCookieExists(true);
                break;
            }
        }
    }, []);

    const clearCookie = (cookieName) => {
        const expirationDate = new Date();
        expirationDate.setFullYear(expirationDate.getFullYear() - 1);
        document.cookie = `${cookieName}=; expires=${expirationDate.toUTCString()}; path=/;`;
    };

    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#" className="nav__link nav__link--logo">
                        </a>
                    </li>
                    <li className="nav__item">
                        {cookieExists ? (
                            <a href="#log-out" className="nav__link nav__link--login" onClick={() => clearCookie('login')}>
                                Вийти
                            </a>
                        ) : (
                            <a href="#login-form" className="nav__link nav__link--login">
                                Ввійти
                            </a>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}
