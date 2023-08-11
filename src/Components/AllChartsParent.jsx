import React from "react";
import SalesBarChart from "./BarChart";
import { Data } from "../Utils/Data";
import StackedBarChart from "./StackedBarChart";
import HorizonatolBartChart from "./HorizonatolBartChart";
import LineChart from "./LineChart";
import LineChartColor from "./LineChartColor";

function AllChartsParent() {
  const chartData = {
    labels: Data.flatMap((data) => (data.Day ? data.Day : [])),
    pointStyle: "circle",
    datasets: [
      {
        label: "Profit",
        data: Data.map((data) => data.Profit),
        backgroundColor: "#3B82F6",
        borderRadius: 1,
      },
      {
        label: "Revenue",
        data: Data.map((data) => data.Revenue),
        backgroundColor: "#BFDBFE",
        borderRadius: 1,
      },
    ],
  };
  console.log(chartData.labels);

  // const options = {
  //   scales: {
  //     y: {
  //       beginAtZero: false,
  //       stacked: true,
  //       min: 0.2,
  //       ticks: {
  //         callback: function (value) {
  //           return (value * 100).toFixed(0) + "%";
  //         },
  //       },
  //     },
  //   },
  // };

  const arbitraryStackKey = "stack1";
  const StackedchartData = {
    labels: Data.map((data) => data.Month),
    datasets: [
      {
        stack: arbitraryStackKey,
        label: "Crypto",
        data: Data.map((data) => data.Cyrpto),
        backgroundColor: "#064E3B",
        borderRadius: 2.5,
      },
      {
        stack: arbitraryStackKey,
        label: "Cash",
        data: Data.map((data) => data.Cash),
        backgroundColor: "#047857",
        borderRadius: 2.5,
      },
      {
        stack: arbitraryStackKey,
        label: "Credit",
        data: Data.map((data) => data.Credit),
        backgroundColor: "#6EE7B7",
        borderRadius: 2.5,
      },
    ],
  };

  const HorizontalchartData = {
    labels: Data.map((data) => data.Month),
    datasets: [
      {
        label: "Product-1",
        data: Data.map((data) => data.Cyrpto),
        backgroundColor: "#165BAA",
        borderRadius: 1.5,
      },
      {
        label: "Product-2",
        data: Data.map((data) => data.Credit),
        backgroundColor: "#A155B9",
        borderRadius: 1.5,
      },
      {
        label: "Product-3",
        data: Data.map((data) => data.Cash),
        backgroundColor: "#F765A3",
        borderRadius: 1.5,
      },
    ],
  };

  const LinechartData = {
    labels: Data.flatMap((data) => (data.Month ? data.Month : [])),
    datasets: [
      {
        label: "Product-1",
        data: Data.flatMap((data) => (data.Cyrpto ? data.Cyrpto : [])),
        borderColor: "#165BAA",
    
      },
      {
        label: "Product-2",
        data: Data.flatMap((data) => (data.Credit ? data.Credit : [])),
        borderColor: "#A155B9",
      
      },
      {
        label: "Product-3",
        data: Data.flatMap((data) => (data.Cash ? data.Cash : [])),
        borderColor: "#F765A3",
     
      },
    ],
  };

  const LinechartColorData = {
    labels: Data.flatMap((data) => (data.Month ? data.Month : [])),
    datasets: [
      {
        label: "Incompleted Tasks",
        data: Data.flatMap((data) => (data.Cyrpto ? data.Cyrpto : [])),
        borderColor: "#DC2626",
        backgroundColor: "#FEE2E2",
        pointRadius: [0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0],
        pointBorderColor: "white",
        pointBackgroundColor: "#DC2626",
        pointBorderWidth: 11,
        fill: {
          target: "origin",
          above: "#FEE2E2",
        },
      },
      {
        label: "Completed Tasks",
        data: Data.flatMap((data) => (data.Credit ? data.Credit : [])),
        borderColor: "#1D4ED8",
        backgroundColor: "#EFF6FF",
        pointRadius: [0, 10, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0],
        pointBorderColor: "white",
        pointBackgroundColor: "#EFF6FF",
        pointBorderWidth: 11,
        fill: "origin",
      },
      
    ],
  };

      const options = {
        indexAxis: "x",
        elements: {
          bar: {
            borderWidth: 1,
          },
        },
    
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            min: 0,
        
            ticks: {
              stepSize: 20,
             
            },
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
            position: "bottom",
          },
       
        },
        tension: 0.4 };

  return (
    <>
      <div className="mt-[28px] ">
        <SalesBarChart chartData={chartData} />
      </div>
      <div className="mt-[150px]">
        <StackedBarChart StackedchartData={StackedchartData} />
      </div>
      <div className="mt-[200px]">
        <HorizonatolBartChart HorizontalchartData={HorizontalchartData} />
      </div>

      <div className="mt-[200px] ">
        <LineChart LinechartData={LinechartData} />
      </div>
      <div className="mt-[200px] ">
        <LineChartColor LinechartColorData={LinechartColorData} options={options} text={"Task Summary"}  />
      </div>
      {/* <div>
        <h1>Pie Chart</h1>
        <PieChart chartData={chartData} />
      </div> */}
    </>
  );
}

export default AllChartsParent;
