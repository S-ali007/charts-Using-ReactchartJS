import React from "react";
import SalesBarChart from "./BarChart";
import { Data } from "../Utils/Data";
import StackedBarChart from "./StackedBarChart";

function AllChartsParent() {
  const chartData = {
    labels: Data.flatMap((data) => data.Day ? data.Day :[]),
    pointStyle: 'circle'
    ,
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
  console.log(chartData.labels)


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
    const StackedchartData ={ 
      labels: Data.map((data) => data.Month),
      datasets:[{
        stack: arbitraryStackKey,
        label: 'Crypto',
          data : Data.map((data) => data.Cyrpto),
          backgroundColor: "#064E3B",
                  borderRadius: 2.5,

        },
        {
          stack: arbitraryStackKey,
          label: 'Cash',
          data:Data.map((data) => data.Cash)  ,
          backgroundColor: "#047857",
          borderRadius: 2.5,

          
        },
      {
          stack: arbitraryStackKey,
          label: 'Credit',
          data:Data.map((data) => data.Credit)  ,
          backgroundColor: "#6EE7B7",
                  borderRadius: 2.5,

          
        }],
    }

  return (
    <>
      <div className="mt-[28px]">
        <SalesBarChart chartData={chartData} /> 
      </div>
     <div className="mt-[150px]"> 
      <StackedBarChart  StackedchartData={StackedchartData} />
     </div>
      {/* <div>
        <h1>Pie Chart</h1>
        <PieChart chartData={chartData} />
      </div> */}
    </>
  );
}

export default AllChartsParent;
