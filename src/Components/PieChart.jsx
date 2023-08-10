// Components/PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ chartData }) => {
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Pie Chart ",
      },
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <div style={{width: '500px'}}>
      <Pie data={chartData} options={options} className="max-w-[50%] w-full" />
    </div>
  );
};

export default PieChart;
