import React from "react";
//components
import { LoginPopup } from "./components/LoginPopup";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import './styles/general.scss';


function App() {
    return (
        <div>
            <Header />
            <LoginPopup />
            <Main />
            <Footer />
        </div>
    )
}

export default App;