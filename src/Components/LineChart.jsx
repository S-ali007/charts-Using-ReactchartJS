import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ LinechartData }) {
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
        min: -100,

        ticks: {
          stepSize: 40,
        },
      },
    },

    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="mx-auto  max-w-[882px] w-full ">
      <div className="font-roboto flex justify-between items-center pb-[27px] border-b-[2px]  ">
        <div>
          <div className="font-roboto text-[#828282]">PRIMARY TEXT</div>
          <div className="font-[500px] text-[40px] ">5.987,34</div>
          <div className="font-roboto text-[#828282] text-[14px]">
            Secondary text
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="12" fill="#BDBDBD" />
            <rect
              x="10"
              y="9.33334"
              width="3.99999"
              height="10.6666"
              rx="2"
              fill="white"
            />
            <rect
              x="10"
              y="4"
              width="3.99999"
              height="3.99999"
              rx="2"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="  border-t-[2px] border-[#ECECEC] pt-[29px]">
        <Line data={LinechartData} options={options} />
      </div>
    </div>
  );
}

export default LineChart;
