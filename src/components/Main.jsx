import React, { useEffect, useState }  from "react";
import ApexCharts from 'apexcharts'
import { useAuth } from './AuthContext';
import "./Main.scss";

export const Main = () => {
  const { isLoggedIn, logout } = useAuth();


    return (
       <main className="main">
        {isLoggedIn ? (
            <div className="main__content">
                <nav className="left-sidebar" id="left-sidebar">
                  
                    <ul className="left-sidebar__list">
                        <li className="left-sidebar__item">
                            <a href="" className="left-sidebar__link left-sidebar__link--open"></a>
                        </li>
                        <li className="left-sidebar__item">
                            <a href="" className="left-sidebar__link  left-sidebar__link--filter"></a>
                        </li>
                        <li className="left-sidebar__item">
                            <a href="" className="left-sidebar__link  left-sidebar__link--chart"></a>
                        </li>
                    </ul>
                </nav>
                <div id="chart">
                </div>
            </div>
        ) : (
            
            <h1 className="main__header">
                Вітаємо в проекті
                <br></br>
                “Планування”
            </h1>

        )}
       </main>
    );
}