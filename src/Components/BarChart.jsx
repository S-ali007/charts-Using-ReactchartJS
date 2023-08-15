import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import SalesActivitesRightSide from "./SalesActivitesRightSide";

const BarChart = ({ chartData }) => {
  const LineChartOptions = {
    scales: {
      x: {
        
        grid: {
          display: false,
          drawOnChartArea	:true
        },
      },
      y: {
        beginAtZero:{
          
        },
        border:{
          display:false
        },

        ticks: {
          callback: function (value, index, ticks) {
            return value + " % ";
          },
        },

        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    barPercentage: 1,
    categoryPercentage: 0.2,
    display:false,
    max: 100,
    min: 20,

    ticks: {
      stepSize: 20,

    },
  };

  return (
    <div className="flex gap-[28px] pb-[28px] ">
      <div className="max-w-[609px] w-full mt-[28px] ">
        <span className="text-[30px] font-bold "> Sales Activites</span>
        <div className="  mt-[28px]">
          <Bar
            data={chartData}
            options={LineChartOptions}
            height={"475px"}
            width={"690px"}
          />
        </div>
      </div>
      <div className="max-w-[304px] w-full ">
        <SalesActivitesRightSide />
      </div>
    </div>
  );
};

export default BarChart;
