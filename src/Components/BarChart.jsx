import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import SalesActivitesRightSide from "./SalesActivitesRightSide";

const BarChart = ({ chartData }) => {
  const LineChartOptions = {
    indexAxis: "x",

    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
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
    max: 100,
    min: 20,
    ticks: {
      stepSize: 20,
    },
    
  };

  return (
    <div className="flex gap-[28px] ">
      <div className="max-w-[609px] w-full h-[455px] ">
        <span className="text-[30px] font-bold "> Sales Activites</span>
        <div className=" max-w-[609px] w-full h-[455px] mt-[28px]">
          <Bar
            data={chartData}
            options={LineChartOptions}
            height={"455px"}
            width={"609px"}
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
