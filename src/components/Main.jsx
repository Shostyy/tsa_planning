import React, { useEffect, useState }  from "react";
import ApexCharts from 'apexcharts'
import "./Main.scss";

export const Main = () => {
    const [cookieExists, setCookieExists] = useState(false);
    
    useEffect(() => {
        const checkCookie = () => {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.startsWith('login=')) {
                    setCookieExists(true);
                    break;
                }
            }
        };
        checkCookie();
    }, []);

    /*apex charts*/
    var options = {
        series: [
        {
          name: "High - 2013",
          data: [28, 29, 33, 36, 32, 32, 33]
        },
        {
          name: "Low - 2013",
          data: [12, 11, 14, 18, 17, 13, 13]
        }
      ],
        chart: {
        height: 350,
        type: 'line',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ['#77B6EA', '#545454'],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: 'Average High & Low Temperature',
        align: 'left'
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        title: {
          text: 'Month'
        }
      },
      yaxis: {
        title: {
          text: 'Temperature'
        },
        min: 5,
        max: 40
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
      };

      var chart = new ApexCharts(document.getElementById("chart"), options);
      chart.render();
    

    return (
       <main className="main">
        {cookieExists ? (
            <div className="main__content">
                <nav className="left-sidebar">
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