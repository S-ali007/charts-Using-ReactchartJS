import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Line } from "react-chartjs-2";

function LineChartColor({LinechartColorData,options, extraClasses,text}) {

  return (
    <div>
      <div className={`mx-auto  max-w-[882px] w-full ${extraClasses} `}>
        <div className="  pb-[27px] border-b-[2px]  ">
          <div>
            <div
          
            className="text-[20px] font-[600px]  ">{text}</div>
          </div>
          <div className="flex gap-[16px] items-center mt-[16px]">
            {" "}
            <div className="flex gap-[8px] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM3.6 6C3.6 7.32548 4.67452 8.4 6 8.4C7.32548 8.4 8.4 7.32548 8.4 6C8.4 4.67452 7.32548 3.6 6 3.6C4.67452 3.6 3.6 4.67452 3.6 6Z"
                  fill="#1D4ED8"
                />
              </svg>
              <h1>Completed</h1>
            </div>
            <div className="flex gap-[8px] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM3.6 6C3.6 7.32548 4.67452 8.4 6 8.4C7.32548 8.4 8.4 7.32548 8.4 6C8.4 4.67452 7.32548 3.6 6 3.6C4.67452 3.6 3.6 4.67452 3.6 6Z"
                  fill="#DC2626"
                />
              </svg>
              <h1>Incompleted</h1>
            </div>
          </div>
        </div>


        <div className=" pt-[29px]">
            <Line data={LinechartColorData} options={options}  />

        </div>
      </div>
    </div>
  );
}

export default LineChartColor;
