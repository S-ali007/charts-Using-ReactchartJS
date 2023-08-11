// Components/PieChart.js
import React from "react";
import { Doughnut } from "react-chartjs-2";


const DoughnutChart = ({  DoughnutchartData}) => {
  const options = {
   
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
        },
      },
      
    },
   

  };

  return (
    <div className="flex flex-col  items-center   ">
      <div className="max-w-[356px] w-full ">
        {" "}
        <h1 className="text-[18px] font-[600] font-Inter">Progress</h1>{" "}
        <h1 className="text-[14px] font-[400] font-Inter text-[#475569]">
          Tueday, 23 July 2023
        </h1>
        <Doughnut data={DoughnutchartData} options={options} />
      </div>
    </div>
  );
};

export default DoughnutChart;
