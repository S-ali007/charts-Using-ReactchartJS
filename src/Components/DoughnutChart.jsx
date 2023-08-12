// Components/PieChart.js
import React from "react";
import { Doughnut } from "react-chartjs-2";
import ReRadialBarChart from "./ReRadialBarChart";



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
  const backgroundCircle={
    id:'backgroundCircle',
    beforeDatasetsDraw(chart,args,pluginOptions){
      const {ctx}=chart;
      ctx.save();
      const xCoor=chart.getDatasetMeta(0).data[0].x;
      const yCoor=chart.getDatasetMeta(0).data[0].y;
      const innerRadius=chart.getDatasetMeta(0).data[0].innerRadius;
      const outerRadius=chart.getDatasetMeta(0).data[0].outerRadius;
      const width = outerRadius-innerRadius;
      const angle=Math.PI /180;
      ctx.beginPath();
      ctx.lineWidth=width;
      ctx.strokeStyle='rgba(0, 0, 0, 0.07)';
      ctx.arc(xCoor, yCoor, outerRadius , 0, angle * 360, false);
      ctx.stroke();
    }
  }

  return (
    <div className="flex flex-col  items-center   ">
      <div className="max-w-[356px] w-full ">
        {" "}
        <h1 className="text-[18px] font-[600] font-Inter">Progress</h1>{" "}
        <h1 className="text-[14px] font-[400] font-Inter text-[#475569]">
          Tueday, 23 July 2023
        </h1>
        <Doughnut data={DoughnutchartData} options={options} plugins={[backgroundCircle]} />
        <ReRadialBarChart/>
      </div>
    </div>
  );
};

export default DoughnutChart;
