import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const cookies = document.cookie.split(';');
    return cookies.some(cookie => cookie.trim().startsWith('login='));
  });

  const login = () => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);
    document.cookie = `login=true; expires=${expirationDate}; path=/;`;
    setIsLoggedIn(true);
  };

  const logout = () => {
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() - 1);
    document.cookie = `login=; expires=${expirationDate.toUTCString()}; path=/;`;
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
