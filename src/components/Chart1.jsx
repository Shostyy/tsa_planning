import React from "react";
import ReactDOM from "react-dom";
import ReactApexChart from "react-apexcharts";
import "./Chart1.scss";

export class Chart1 extends React.Component {
  constructor(props) {
    super(props);

    this.chartRef = React.createRef();

    this.state = {
      series: [
        {
          name: "Продажі (рік)",
          data: [2.41, 2.25, 2.41, 2.45, 2.32, 2.28, 2.42, 2.51, 2.30, 2.22, 2.28, 2.28]
        },
        {
          name: "Продажі (середнє)",
          data: this.calculateAverage([2.41, 2.25, 2.41, 2.45, 2.32, 2.28, 2.42, 2.51, 2.30, 2.22, 2.28, 2.28])
        },
        {
          name: "Продажі (рік)",
          data: [0.53, 0.58, 0.73, 1, 0.73, 0.72, 0.65, 0.78, 0.81, 0.91, 0.83, 0.87]
        },
        {
          name: "Продажі (середнє)",
          data: this.calculateAverage([0.53, 0.58, 0.73, 1, 0.73, 0.72, 0.65, 0.78, 0.81, 0.91, 0.83, 0.87])
        }
      ],
      options: {
        xaxis: {
          categories: ['Січень 22', 'Лютий 22', 'Березень 22', 'Квітень 22', 'Травень 22', 'Червень 22', 'Вересень 22', 'Жовтень 22', 'Листопад 22', 'Грудень 22', 'Січень 23', 'Лютий 23']
        },
        chart: {
          type: "line",
          dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          },
        },
        legend: {
          position: 'top',
          markers: {
            fillColors: ['#a52a2a', '#d2691e', '#b8860b', '#00008b']
          }
        },
        stroke: {
          width: [3, 3, 3, 3],
          colors: ['#a52a2a', '#d2691e', '#b8860b', '#00008b'],
          dashArray: [0, 5, 0, 5]
        },
        annotations: {
          points: [
            {
              x: 'Січень 23',
              y: 1.8,
              marker: {
                size: 2,
                fillColor: '#ff0000',
                strokeColor: '#000000',
                radius: 2
              },
              label: {
                text: 'Data A +180%',
                borderColor: '#000000',
                borderWidth: 1
              }
            },
            {
              x: 'Листопад 22',
              y: 1.3,
              marker: {
                size: 2,
                fillColor: '#00ff00',
                strokeColor: '#000000',
                radius: 2
              },
              label: {
                text: 'Data B +130%',
                borderColor: '#000000',
                borderWidth: 1
              }
            },
          ]
        }
      }
    };
  }

  calculateAverage(data) {
    const sum = data.reduce((total, value) => total + value, 0);
    const average = (sum / data.length).toFixed(2);

    return data.map(() => Number(average)); // Convert average to number
  }

  handleZoom = (chartContext, { xaxis, yaxis }) => {
    // Handle zoom event here (optional)
  };

  handleResetScope = () => {
    if (this.chartRef.current) {
      this.chartRef.current.chart.zoomX(0, 1);
    }
  };

  render() {
    return (
      <div className="chart-container">
        <h2>Chart 1</h2>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height={600}
            ref={this.chartRef}
            events={{
              zoomed: this.handleZoom
            }}
          />
          <button onClick={this.handleResetScope}>Reset Scope</button>
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector("#root");
ReactDOM.render(<Chart1 />, domContainer);
