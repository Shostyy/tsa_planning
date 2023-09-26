import React, { useEffect, useState } from "react";
import { useAuth } from './AuthContext';
import './Header.scss';

export const Header = () => {
    const { isLoggedIn, logout } = useAuth();
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#" className="nav__link nav__link--logo">
                        </a>
                    </li>
                    <li className="nav__item">
                    {isLoggedIn ? (
                        <a href="#log-out" className="nav__link nav__link--login" onClick={logout}>
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
