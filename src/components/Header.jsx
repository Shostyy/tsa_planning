import React, { useEffect, useState } from "react";
import { useAuth } from './AuthContext';
import './Header.scss';

export const Header = () => {
    const { isLoggedIn, logout } = useAuth();
    return (
        <header className="header">
            {isLoggedIn ? (
                <>
                    <a href="#left-sidebar" className="open_sidebar">
                    </a>
                    <a href="#" className="close_sidebar">
                    </a>
                </>
            ) : (
                <></>
            )}
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#" className="nav__link nav__link--logo">
                        </a>
                    </li>
                    <li className="nav__item">
                    {isLoggedIn ? (
                        <div className="header-wrapper">
                            <a href="#" className="user-label">Користувач</a>
                            <a href="#log-out" className="nav__link nav__link--login" onClick={logout}>
                            Вийти
                            </a>
                        </div>
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
