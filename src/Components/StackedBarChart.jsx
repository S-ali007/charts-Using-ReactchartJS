import React from "react";
import { Bar } from "react-chartjs-2";

function StackedBarChart({ StackedchartData }) {
  const Stackoptions = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        stacked: true,
       
      },
      y: {
        border: {
          display: false,
        },

        ticks: {
          callback: function (value, index, ticks) {
            return " $" + value;
          },
        },
        stacked: true,
       
      },
    },
    plugins: {
      legend: {
        position: "right",
        // rtl: true,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
        },
      },
    },
    max: 25000,
    min: 5000,

    ticks: {
      stepSize: 5000,
    },
  };

  return (
    <div className="px-[64px]">
      <div className="flex justify-between font-Manrope  ">
        <div>
          <div className="text-[24px] font-[700]">Store Metrics</div>
          <div className="text-[18px] font-[400] text-[#64748B]">
            Your current sales summary and activity.
          </div>
        </div>
        <div className="flex ">
          <img src="/assets/3 dots.svg" alt="" />
        </div>
      </div>

      <div className="mt-[32px] pt-[32px] border-t-[1px] flex px-[8px] justify-between">
        <div className="flex mt-[32px] gap-[40px] ">
          <div className="flex ">
            <div className="pl-[4px] border-l-[3px]">
              <h1 className="text-[22px] font-[700px] text-[#64748B]">
                Bitcoin
              </h1>
              <div className="flex justify-center items-center gap-[14px] text-center">
                <div className="text-[22px] font-[700px]">62%</div>
                <div className="flex justify-center items-center ">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="7"
                      viewBox="0 0 8 7"
                      fill="none"
                    >
                      <path
                        d="M3.13397 0.500001C3.51887 -0.166666 4.48113 -0.166667 4.86603 0.5L7.4641 5C7.849 5.66667 7.36788 6.5 6.59808 6.5H1.40192C0.632124 6.5 0.150998 5.66667 0.535898 5L3.13397 0.500001Z"
                        fill="#047857"
                      />
                    </svg>
                  </div>
                  <div className="text-[#047857] font-[600px] text-[16px]">
                    10.78%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex ">
            <div className="pl-[4px] border-l-[3px]">
              <h1 className="text-[22px] font-[700px] text-[#64748B]">
                Credit
              </h1>
              <div className="flex justify-center items-center gap-[14px] text-center">
                <div className="text-[22px] font-[700px]">62%</div>
                <div className="flex justify-center items-center ">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="7"
                      viewBox="0 0 8 7"
                      fill="none"
                    >
                      <path
                        d="M3.13397 0.500001C3.51887 -0.166666 4.48113 -0.166667 4.86603 0.5L7.4641 5C7.849 5.66667 7.36788 6.5 6.59808 6.5H1.40192C0.632124 6.5 0.150998 5.66667 0.535898 5L3.13397 0.500001Z"
                        fill="#047857"
                      />
                    </svg>
                  </div>
                  <div className="text-[#047857] font-[600px] text-[16px]">
                    10.78%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex ">
            <div className="pl-[4px] border-l-[3px]">
              <h1 className="text-[22px] font-[700px] text-[#64748B]">Cash</h1>
              <div className="flex justify-center items-center gap-[14px] text-center">
                <div className="text-[22px] font-[700px]">62%</div>
                <div className="flex justify-center items-center ">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="7"
                      viewBox="0 0 8 7"
                      fill="none"
                    >
                      <path
                        d="M3.13397 0.500001C3.51887 -0.166666 4.48113 -0.166667 4.86603 0.5L7.4641 5C7.849 5.66667 7.36788 6.5 6.59808 6.5H1.40192C0.632124 6.5 0.150998 5.66667 0.535898 5L3.13397 0.500001Z"
                        fill="#047857"
                      />
                    </svg>
                  </div>
                  <div className="text-[#047857] font-[600px] text-[16px]">
                    10.78%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end w-[351px]  h-auto ">
          <div className="flex justify-center items-center gap-[8px] p-[8px] border-[1px] border-[#E7EAEE] rounded-[7px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.244 4.08934 11.3333 6.66667 11.3333C7.71489 11.3333 8.68239 10.9877 9.46145 10.4043L12.1953 13.1381C12.4557 13.3985 12.8778 13.3985 13.1381 13.1381C13.3985 12.8778 13.3985 12.4557 13.1381 12.1953L10.4043 9.46145C10.9877 8.68239 11.3333 7.71489 11.3333 6.66667C11.3333 4.08934 9.244 2 6.66667 2ZM3.33333 6.66667C3.33333 4.82572 4.82572 3.33333 6.66667 3.33333C8.50762 3.33333 10 4.82572 10 6.66667C10 8.50762 8.50762 10 6.66667 10C4.82572 10 3.33333 8.50762 3.33333 6.66667Z"
                fill="#64748B"
              />
            </svg>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              className=" outline-none text-[#64748B] "
            />
          </div>
          <div className="flex mt-[12px] gap-[12px] w-[215px] text-[#64748B]">
            <div className="items-center text-center bg-[#E7EAEE] rounded-[3px] flex outline-none py-[8px] px-[12px] w-[101px]">
              <select
                name="Monthly"
                id=""
                className="bg-[#E7EAEE] outline-none "
              >
                <option value="1">Monthly</option>
              </select>
            </div>
            <div className="flex py-[8px] px-[12px] gap-[10px] items-center text-center text-[#64748B] bg-[#E7EAEE] rounded-[3px] w-[101px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.3923 4.16667H3.58333C3.1231 4.16667 2.75 4.53976 2.75 5C2.75 5.46024 3.1231 5.83333 3.58333 5.83333H10.3923C10.7355 6.80433 11.6615 7.5 12.75 7.5C13.8385 7.5 14.7645 6.80433 15.1077 5.83333H16.9167C17.3769 5.83333 17.75 5.46024 17.75 5C17.75 4.53976 17.3769 4.16667 16.9167 4.16667H15.1077C14.7645 3.19567 13.8385 2.5 12.75 2.5C11.6615 2.5 10.7355 3.19567 10.3923 4.16667ZM11.9167 5C11.9167 4.53976 12.2898 4.16667 12.75 4.16667C13.2102 4.16667 13.5833 4.53976 13.5833 5C13.5833 5.46024 13.2102 5.83333 12.75 5.83333C12.2898 5.83333 11.9167 5.46024 11.9167 5Z"
                  fill="#64748B"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.91667 7.5C8.00518 7.5 8.93121 8.19567 9.27441 9.16667H16.9167C17.3769 9.16667 17.75 9.53976 17.75 10C17.75 10.4602 17.3769 10.8333 16.9167 10.8333H9.27441C8.93121 11.8043 8.00518 12.5 6.91667 12.5C5.82815 12.5 4.90212 11.8043 4.55892 10.8333H3.58333C3.1231 10.8333 2.75 10.4602 2.75 10C2.75 9.53976 3.1231 9.16667 3.58333 9.16667H4.55892C4.90212 8.19567 5.82815 7.5 6.91667 7.5ZM6.91667 9.16667C7.3769 9.16667 7.75 9.53976 7.75 10C7.75 10.4602 7.3769 10.8333 6.91667 10.8333C6.45643 10.8333 6.08333 10.4602 6.08333 10C6.08333 9.53976 6.45643 9.16667 6.91667 9.16667Z"
                  fill="#64748B"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.58333 14.1667C3.1231 14.1667 2.75 14.5398 2.75 15C2.75 15.4602 3.1231 15.8333 3.58333 15.8333H12.0589C12.4021 16.8043 13.3282 17.5 14.4167 17.5C15.5052 17.5 16.4312 16.8043 16.7744 15.8333H16.9167C17.3769 15.8333 17.75 15.4602 17.75 15C17.75 14.5398 17.3769 14.1667 16.9167 14.1667H16.7744C16.4312 13.1957 15.5052 12.5 14.4167 12.5C13.3282 12.5 12.4021 13.1957 12.0589 14.1667H3.58333ZM15.25 15C15.25 14.5398 14.8769 14.1667 14.4167 14.1667C13.9564 14.1667 13.5833 14.5398 13.5833 15C13.5833 15.4602 13.9564 15.8333 14.4167 15.8333C14.8769 15.8333 15.25 15.4602 15.25 15Z"
                  fill="#64748B"
                />
              </svg>
              <div>Filter</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[68px]">
        {" "}
        <Bar data={StackedchartData} options={Stackoptions} />
      </div>
    </div>
  );
}

export default StackedBarChart;
