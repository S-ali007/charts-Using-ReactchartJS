import React from "react";
import { Bar } from "react-chartjs-2";
function HorizonatolBartChart({HorizontalchartData}) {
    const options = {
        indexAxis: "y",
        elements: {
            bar: {
              borderWidth: 1,
            }
          },
    
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: true,
            },
          },
          x: {
            grid: {
              display: true,
            },
          },
        },
    
        plugins: {
            legend: {
              position: 'bottom',
            },
            title: {
              // display: true,
              // text: 'Horizontal Bar Chart'
            }},
                  barPercentage: 1,
            categoryPercentage: 1,
            max: 150,
            min: 0,
        
            ticks: {
              stepSize: 20,
        
            },
      };


  return (
    <div className="mx-auto  max-w-[831px] w-full">
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

    {/* section for   horizontal Chart */}
      <div className="mt-[18px]">
      <Bar data={HorizontalchartData} options={options} />
      </div>
    </div>
  );
}

export default HorizonatolBartChart;
