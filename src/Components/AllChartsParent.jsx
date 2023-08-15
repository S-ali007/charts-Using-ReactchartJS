import React from "react";
import SalesBarChart from "./BarChart";
import { Data } from "../Utils/Data";
import StackedBarChart from "./StackedBarChart";
import HorizonatolBartChart from "./HorizonatolBartChart";
import LineChart from "./LineChart";
import LineChartColor from "./LineChartColor";
import DoughnutChart from "./DoughnutChart";
import { type } from "@testing-library/user-event/dist/type";
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
        data: Data.map((data) => data.CyrptoDollar),
        backgroundColor: "#064E3B",
        borderRadius: {
          topLeft: 4,
          topRight: 4,
          bottomLeft: 4,
          bottomRight: 4,
        },
        borderSkipped: false,
        borderWidth: 0.9,
      },
      {
        stack: arbitraryStackKey,
        label: "Cash",
        data: Data.map((data) => data.CashDollar),
        backgroundColor: "#047857",
        borderRadius: {
          topLeft: 4,
          topRight: 4,
          bottomLeft: 4,
          bottomRight: 4,
        },
        borderSkipped: false,
        borderWidth: 0.9,
      },
      {
        stack: arbitraryStackKey,
        label: "Credit",
        data: Data.map((data) => data.CreditDollar),
        backgroundColor: "#6EE7B7",
        borderRadius: {
          topLeft: 4,
          topRight: 4,
          bottomLeft: 4,
          bottomRight: 4,
        },
        borderSkipped: false,
        borderWidth: 0.9,
      },
    ],
  };

  const HorizontalchartData = {
    labels: Data.map((data) => data.Month),
    datasets: [
      {
        label: "Product-1",
        data: Data.map((data) => data.Cyrpto),
        backgroundColor: "#FFA5CB",
        borderRadius: 1.5,
        borderColor: "#F765A3",
      },
      {
        label: "Product-2",
        data: Data.map((data) => data.Credit),
        backgroundColor: "#E697FF",
        borderRadius: 1.5,
        borderColor: "#A155B9",
      },
      {
        label: "Product-3",
        data: Data.map((data) => data.Cash),
        backgroundColor: "#63ABFD",
        borderRadius: 1.5,
        borderColor: "#165BAA",
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
        data: [60, 59, 59, 65, 66, 67, 68, 68, 68, 68, 68, 56],
        borderColor: "#DC2626",
        backgroundColor: "#FEE2E2",
        pointRadius: [0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0],
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
        data: [67, 69, 70, 75, 80, 85, 90, 90, 90, 87, 87, 79],
        borderColor: "#1D4ED8",
        backgroundColor: "#EFF6FF",
        pointRadius: [0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0],
        pointBorderColor: "white",
        pointBackgroundColor: "#1D4ED8",
        pointBorderWidth: 11,
        fill: "origin",
      },
    ],
  };

  const DoughnutchartData = {
    labels: Data.flatMap((data) => (data.Department ? data.Department : [])),

    datasets: [
      {
        label: "HR",
        data: [1],
        backgroundColor: ["#1D4ED8"],
        borderWidth: 5,
        circumference: 275,
        borderRadius: 10,
      },
      {
        label: "Marketing",
        data: [0, 4],
        backgroundColor: ["#EC4899"],
        borderWidth: 5,
        circumference: 180,
        borderRadius: 10,
      },
      {
        label: "Finance",
        data: [0, 0, 3],
        backgroundColor: ["#6366F1"],
        borderWidth: 5,
        circumference: 250,
        borderRadius: 10,
      },
      {
        label: "Operations",
        data: [0, 0, 0, 4],
        backgroundColor: ["#EAB308"],
        borderWidth: 5,
        circumference: 120,
        borderRadius: 10,
      },
    ],
  };

  console.log(DoughnutchartData);

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
        <LineChartColor
          LinechartColorData={LinechartColorData}
          text={"Task Summary"}
        />
      </div>
      <div className="mt-[200px] ">
        <DoughnutChart DoughnutchartData={DoughnutchartData} />
      </div>
    </>
  );
}

export default AllChartsParent;
