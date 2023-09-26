import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//components
import { LoginPopup } from "./components/LoginPopup";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

import './styles/general.scss';


function App() {
    return (
        <>
            <Router>
                <Header />
                <LoginPopup />
                <Main />
                <Footer />
            </Router>
        </>
    )
}

export default App;