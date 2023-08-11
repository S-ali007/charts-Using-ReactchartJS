import React from "react";
import LineChartColor from "./LineChartColor";
import { Data } from "../Utils/Data";
import { Line } from "react-chartjs-2";

function Dashboard() {
  const LinechartColorData = {
    labels: Data.flatMap((data) => (data.Month ? data.Month : [])),
    datasets: [
      {
        label: "Incompleted Tasks",
        data: [3, 15, 5, 26, 14, 23, 36, 28, 13, 26, 33, 22],
        borderColor: "#818CF8",
        backgroundColor: "#818CF8",
        fill: {
          target: "origin",
          above: "#EFF6FF",
        },
        pointRadius: false,
      },
      {
        label: "Completed Tasks",
        data: [6, 30, 10, 56, 28, 46, 72, 46, 26, 52, 66, 77],
        borderColor: "#4F46E5",
        backgroundColor: "#EFF6FF",
        fill: "origin",
        pointRadius: [0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0],
        pointBorderColor: "white", // Set the pointer border color to white
        pointBackgroundColor: "#4F46E5", // Set the pointer fill color to blue
        // borderDash: [5, 5], // Set the border dash pattern for marker lines
        pointBorderWidth: 5, // Add this line to control the marker border width

        // pointRadius:(items)=>{
        //   console.log(Data.length)
        // }
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
          stepSize: 25, //to change the number of value to show and also show minium and maxium value
          display: false, //this to hide and to show the y axis
        },
        grid: {
          display: true,
        },
      },

      x: {
        grid: {
          display: false,
        },
      },
    },

    plugins: {
      lineMarker: {
        borderColor: "red",
        borderWidth: "10",
      },
      legend: {
        position: false,
      },
    },
    tension: 0.4,
  };
  return (
    <div className="font-PlusJakartaSans mx-auto">
      {/* Header */}
      <div className="flex items-center  justify-between pl-[44px] pr-[66px]  bg-[#FFF]  border-b-[1px] border-[#E4E4E7] py-[10px] ">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="109"
            height="30"
            viewBox="0 0 109 30"
            fill="none"
          >
            <g clip-path="url(#clip0_1_194)">
              <path
                d="M15.0497 0C12.0732 0 9.16348 0.875752 6.68857 2.51652C4.21367 4.15728 2.28467 6.48935 1.1456 9.21785C0.00652022 11.9463 -0.291513 14.9487 0.289182 17.8452C0.869882 20.7419 2.30324 23.4024 4.40797 25.4906C6.51271 27.5789 9.19436 29.0011 12.1137 29.5774C15.0331 30.1535 18.0591 29.8578 20.8091 28.7278C23.5591 27.5974 25.9093 25.6835 27.5632 23.228C29.2169 20.7724 30.0995 17.8854 30.0995 14.9321C30.0995 10.9719 28.514 7.17382 25.6915 4.37352C22.8691 1.5732 19.0412 0 15.0497 0ZM24.2945 17.1143C24.2945 17.413 22.9357 17.4556 22.9357 17.7543C22.9357 18.0529 24.2796 18.4582 24.2796 18.87C24.2796 19.3733 21.5103 19.448 21.5103 19.9515C21.5103 20.4891 23.6108 20.3226 23.6108 20.905C23.6108 21.5919 18.3349 21.2719 18.3349 21.9865C18.3349 22.2594 19.01 22.3726 19.855 22.4622C20.3194 22.5133 20.2182 22.7394 19.9539 22.8889C18.4768 23.783 16.78 24.2561 15.0497 24.2561C13.3195 24.2561 11.6227 23.783 10.1457 22.8889C9.88337 22.7289 9.78018 22.5028 10.2446 22.4622C11.0895 22.3726 11.7668 22.2489 11.7668 21.9865C11.7668 21.2719 6.48858 21.5919 6.48858 20.905C6.48858 20.3226 8.59127 20.4783 8.59127 19.9515C8.59127 19.448 5.81998 19.3733 5.81998 18.87C5.81998 18.4582 7.16587 18.0593 7.16587 17.7543C7.16587 17.4492 5.80492 17.4151 5.80492 17.1143C5.80492 16.8136 6.79822 16.6194 6.79822 16.4061C6.79822 16.003 5.64366 16.7368 5.64366 14.9321C5.64366 12.457 6.6347 10.0832 8.39867 8.333C10.1627 6.5828 12.5551 5.59954 15.0497 5.59954C17.5444 5.59954 19.9369 6.5828 21.7009 8.333C23.4649 10.0832 24.4558 12.457 24.4558 14.9321C24.4558 16.7368 23.3014 15.9987 23.3014 16.4061C23.3014 16.6194 24.2945 16.7922 24.2945 17.1143Z"
                fill="#4F46E5"
              />
              <path
                d="M43.1291 22.1813C44.0694 22.1813 44.9097 22.0239 45.6501 21.7091C46.4025 21.3943 47.037 20.9802 47.5542 20.4672C48.0712 19.9424 48.4415 19.3711 48.6648 18.753L46.5141 17.7559C46.2554 18.409 45.8324 18.9513 45.2447 19.3826C44.6687 19.8024 43.9636 20.0124 43.1291 20.0124C42.3064 20.0124 41.5837 19.82 40.9607 19.4352C40.3378 19.0504 39.8499 18.5198 39.4974 17.8434C39.1448 17.1554 38.9686 16.3566 38.9686 15.447C38.9686 14.5374 39.1448 13.7445 39.4974 13.0681C39.8499 12.3801 40.3378 11.8495 40.9607 11.4763C41.5837 11.0915 42.3064 10.8991 43.1291 10.8991C43.9636 10.8991 44.6687 11.1148 45.2447 11.5463C45.8324 11.9661 46.2554 12.5025 46.5141 13.1555L48.6648 12.1585C48.4415 11.5405 48.0712 10.9749 47.5542 10.4618C47.037 9.93705 46.4025 9.51723 45.6501 9.20238C44.9097 8.88753 44.0694 8.7301 43.1291 8.7301C42.189 8.7301 41.3192 8.8992 40.52 9.23736C39.7208 9.56388 39.0272 10.0303 38.4397 10.6367C37.8519 11.2314 37.3935 11.9428 37.0645 12.7707C36.7354 13.587 36.5708 14.4791 36.5708 15.447C36.5708 16.4149 36.7354 17.3128 37.0645 18.1408C37.3935 18.957 37.8519 19.6683 38.4397 20.2748C39.0272 20.8811 39.7208 21.3535 40.52 21.6917C41.3192 22.0181 42.189 22.1813 43.1291 22.1813Z"
                fill="black"
              />
              <path
                d="M50.4175 21.9715H52.7271V8.7301H50.4175V21.9715Z"
                fill="black"
              />
              <path
                d="M57.7683 22.1813C59.0142 22.1813 60.0131 21.7733 60.7653 20.957V21.9715H62.9514V15.6394C62.9514 14.9747 62.781 14.3858 62.4402 13.8727C62.0992 13.3596 61.6292 12.9631 61.0297 12.6833C60.4422 12.3917 59.7546 12.246 58.9671 12.246C58.0033 12.246 57.1453 12.4734 56.3931 12.9282C55.6409 13.383 55.1238 13.9835 54.8417 14.7298L56.7281 15.6394C56.9043 15.2079 57.1806 14.8639 57.5567 14.6074C57.9328 14.3392 58.3736 14.2051 58.8788 14.2051C59.4078 14.2051 59.8309 14.345 60.1482 14.6249C60.4773 14.8931 60.6419 15.2312 60.6419 15.6394V15.9542L57.7859 16.409C56.6576 16.5956 55.8231 16.9513 55.2824 17.476C54.7419 18.0008 54.4714 18.6596 54.4714 19.4526C54.4714 20.2922 54.7712 20.957 55.3707 21.4467C55.97 21.9365 56.7692 22.1813 57.7683 22.1813ZM56.8691 19.3652C56.8691 18.7005 57.3217 18.2807 58.2265 18.1058L60.6419 17.7035V18.0883C60.6419 18.7413 60.4127 19.2952 59.9543 19.75C59.5076 20.2048 58.9201 20.4322 58.1914 20.4322C57.8036 20.4322 57.4861 20.3389 57.2394 20.1524C56.9926 19.9541 56.8691 19.6917 56.8691 19.3652Z"
                fill="black"
              />
              <path
                d="M65.0859 21.9715H67.3954V16.6715C67.3954 15.9485 67.5953 15.3887 67.9949 14.9922C68.4063 14.5841 68.935 14.38 69.5816 14.38H70.4101V12.351H69.846C69.2583 12.351 68.7411 12.4559 68.2945 12.6658C67.848 12.8757 67.5012 13.2547 67.2543 13.8028V12.4559H65.0859V21.9715Z"
                fill="black"
              />
              <path
                d="M71.6798 11.3889H73.9893V8.94H71.6798V11.3889ZM71.6798 21.9715H73.9893V12.4559H71.6798V21.9715Z"
                fill="black"
              />
              <path
                d="M80.4939 22.0765C80.8817 22.0765 81.2638 22.0472 81.6399 21.9889V20.0124C81.4164 20.0474 81.2108 20.0648 81.0228 20.0648C80.4586 20.0648 80.0472 19.9366 79.7887 19.68C79.53 19.4235 79.4009 19.0561 79.4009 18.5779V14.5024H81.6046V12.4559H79.4009V10.2869H77.0914V11.0215C77.0914 11.488 76.962 11.8436 76.7035 12.0885C76.445 12.3334 76.0805 12.4559 75.6105 12.4559H75.4341V14.5024H77.0914V18.7005C77.0914 19.7616 77.3851 20.5896 77.9729 21.1842C78.5722 21.779 79.4126 22.0765 80.4939 22.0765Z"
                fill="black"
              />
              <path
                d="M84.5679 25.8372C85.4728 25.8372 86.225 25.5805 86.8245 25.0676C87.4355 24.5661 87.9234 23.8548 88.2878 22.9335L92.466 12.4559H89.9625L87.4943 19.0154L85.0086 12.4559H82.5229L86.3133 21.9715L86.1016 22.4787C85.9136 22.8752 85.6962 23.1959 85.4493 23.4407C85.2143 23.6857 84.8322 23.8081 84.3035 23.8081C84.1153 23.8081 83.9156 23.7905 83.704 23.7557C83.4925 23.7324 83.3044 23.6974 83.1399 23.6507V25.5748C83.3396 25.6681 83.5629 25.7322 83.8098 25.7672C84.0565 25.8139 84.3093 25.8372 84.5679 25.8372Z"
                fill="black"
              />
              <path
                d="M98.9879 22.1813C99.9986 22.1813 100.892 21.9715 101.668 21.5517C102.455 21.1318 103.072 20.5546 103.519 19.82C103.965 19.0854 104.189 18.2515 104.189 17.3186V8.94H101.791V17.1962C101.791 17.7443 101.668 18.234 101.421 18.6655C101.186 19.0854 100.857 19.4176 100.433 19.6626C100.022 19.8957 99.5402 20.0124 98.9879 20.0124C98.4472 20.0124 97.9653 19.8957 97.5421 19.6626C97.119 19.4176 96.7842 19.0854 96.5372 18.6655C96.3023 18.234 96.1847 17.7443 96.1847 17.1962V8.94H93.787V17.3186C93.787 18.2515 94.0105 19.0854 94.4571 19.82C94.9036 20.5546 95.5148 21.1318 96.2905 21.5517C97.078 21.9715 97.977 22.1813 98.9879 22.1813Z"
                fill="black"
              />
              <path
                d="M106.582 21.9715H108.98V8.94H106.582V21.9715Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_194">
                <rect width="109" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="max-w-[910px] w-full flex gap-[10px] justify-center items-center border-[#E4E4E7] border rounded-[10px] pl-[16px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M15.75 15.75L11.25 11.25M12.75 7.5C12.75 10.3995 10.3995 12.75 7.5 12.75C4.60051 12.75 2.25 10.3995 2.25 7.5C2.25 4.60051 4.60051 2.25 7.5 2.25C10.3995 2.25 12.75 4.60051 12.75 7.5Z"
              stroke="#A1A1AA"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input
            type="text"
            placeholder="Type to search"
            className="py-[11px] outline-none w-full px-[16px]"
          />
        </div>
        <div className="flex justify-center items-center gap-[30px]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M3.125 8.33331L11.3444 13.8129C12.0442 14.2794 12.9558 14.2794 13.6556 13.8129L21.875 8.33331M5.20833 19.7916H19.7917C20.9423 19.7916 21.875 18.8589 21.875 17.7083V7.29165C21.875 6.14105 20.9423 5.20831 19.7917 5.20831H5.20833C4.05774 5.20831 3.125 6.14105 3.125 7.29165V17.7083C3.125 18.8589 4.05774 19.7916 5.20833 19.7916Z"
                stroke="#3F3F46"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M15.625 17.7083H20.8334L19.3699 16.2449C18.973 15.848 18.75 15.3097 18.75 14.7484V11.4583C18.75 8.73705 17.0108 6.42197 14.5834 5.56397V5.20833C14.5834 4.05774 13.6506 3.125 12.5 3.125C11.3494 3.125 10.4167 4.05774 10.4167 5.20833V5.56397C7.9892 6.42197 6.25002 8.73705 6.25002 11.4583V14.7484C6.25002 15.3097 6.02705 15.848 5.63016 16.2449L4.16669 17.7083H9.37502M15.625 17.7083V18.75C15.625 20.4759 14.2259 21.875 12.5 21.875C10.7741 21.875 9.37502 20.4759 9.37502 18.75V17.7083M15.625 17.7083H9.37502"
                stroke="#3F3F46"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <img src="/assets/navbar profile imge.svg" alt="" />
        </div>
      </div>

      {/* Dashboard Section */}
      <div className="flex bg-gray-50 max-w-[1600px] w-full  gap-[43px] pb-[43px] ">
        {/* aside-content */}
        <div className="aside  px-[24px] pt-[36px] max-w-[280px] w-full ">
          <button className="bg-[#4F46E5] gap-[10px]   flex  items-center p-[16px] rounded-[10px] text-white  font-PlusJakartaSans">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
              >
                <path
                  d="M9.5 3V15M15.5 9L3.5 9"
                  stroke="#F9FAFB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="max-w-[143px] w-full text-[13px] font-[700] font-PlusJakartaSans ">
              Connect New Account
            </div>
          </button>
          <div className="flex  items-center mt-[30px] gap-[13px] font-PlusJakartaSans font-[500] text-[13px] leading-[21px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M2.25 9L3.75 7.5M3.75 7.5L9 2.25L14.25 7.5M3.75 7.5V15C3.75 15.4142 4.08579 15.75 4.5 15.75H6.75M14.25 7.5L15.75 9M14.25 7.5V15C14.25 15.4142 13.9142 15.75 13.5 15.75H11.25M6.75 15.75C7.16421 15.75 7.5 15.4142 7.5 15V12C7.5 11.5858 7.83579 11.25 8.25 11.25H9.75C10.1642 11.25 10.5 11.5858 10.5 12V15C10.5 15.4142 10.8358 15.75 11.25 15.75M6.75 15.75H11.25"
                stroke="#18181B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h1 className="">Dashboard</h1>
          </div>
          <div className="flex  items-center mt-[30px] gap-[13px] font-PlusJakartaSans font-[500] text-[#A1A1AA] uppercase text-[11px] leading-[21px]">
            <h1>Analytics</h1>
          </div>
          <div className="flex  items-center mt-[23px] gap-[13px] font-PlusJakartaSans font-[500] text-[13px] leading-[21px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M11.25 11.25L9.74999 15L6.74999 6.75L15 9.75L11.25 11.25ZM11.25 11.25L15 15M5.39117 1.67889L5.97351 3.85223M3.85217 5.97354L1.67883 5.3912M10.4623 3.03772L8.87128 4.62871M4.62872 8.87128L3.03773 10.4623"
                stroke="#3F3F46"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h1>Hotjar</h1>
          </div>
          <div className="flex  items-center mt-[30px] gap-[13px] font-PlusJakartaSans font-[500] text-[#A1A1AA] uppercase text-[11px] leading-[21px]">
            <h1>Support</h1>
          </div>
          <div className="flex  items-center mt-[23px] gap-[13px] font-PlusJakartaSans font-[500] text-[13px] leading-[21px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M6.75 14.25V9.75C6.75 8.92157 6.07843 8.25 5.25 8.25H3.75C2.92157 8.25 2.25 8.92157 2.25 9.75V14.25C2.25 15.0784 2.92157 15.75 3.75 15.75H5.25C6.07843 15.75 6.75 15.0784 6.75 14.25ZM6.75 14.25V6.75C6.75 5.92157 7.42157 5.25 8.25 5.25H9.75C10.5784 5.25 11.25 5.92157 11.25 6.75V14.25M6.75 14.25C6.75 15.0784 7.42157 15.75 8.25 15.75H9.75C10.5784 15.75 11.25 15.0784 11.25 14.25M11.25 14.25V3.75C11.25 2.92157 11.9216 2.25 12.75 2.25H14.25C15.0784 2.25 15.75 2.92157 15.75 3.75V14.25C15.75 15.0784 15.0784 15.75 14.25 15.75H12.75C11.9216 15.75 11.25 15.0784 11.25 14.25Z"
                stroke="#3F3F46"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h1>Tickets</h1>
          </div>
          <div className="flex  items-center mt-[20px] gap-[13px] font-PlusJakartaSans font-[500] text-[13px] leading-[21px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M12 5.25C12 6.90685 10.6569 8.25 9 8.25C7.34315 8.25 6 6.90685 6 5.25C6 3.59315 7.34315 2.25 9 2.25C10.6569 2.25 12 3.59315 12 5.25Z"
                stroke="#3F3F46"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 10.5C6.10051 10.5 3.75 12.8505 3.75 15.75H14.25C14.25 12.8505 11.8995 10.5 9 10.5Z"
                stroke="#3F3F46"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h1>Agents</h1>
          </div>
          <div className="flex  items-center mt-[20px] gap-[13px] font-PlusJakartaSans font-[500] text-[13px] leading-[21px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M9 3.26563C9.54971 2.64282 10.354 2.25 11.25 2.25C12.9069 2.25 14.25 3.59315 14.25 5.25C14.25 6.90685 12.9069 8.25 11.25 8.25C10.354 8.25 9.54971 7.85718 9 7.23437M11.25 15.75H2.25V15C2.25 12.5147 4.26472 10.5 6.75 10.5C9.23528 10.5 11.25 12.5147 11.25 15V15.75ZM11.25 15.75H15.75V15C15.75 12.5147 13.7353 10.5 11.25 10.5C10.4304 10.5 9.66189 10.7191 9 11.102M9.75 5.25C9.75 6.90685 8.40685 8.25 6.75 8.25C5.09315 8.25 3.75 6.90685 3.75 5.25C3.75 3.59315 5.09315 2.25 6.75 2.25C8.40685 2.25 9.75 3.59315 9.75 5.25Z"
                stroke="#3F3F46"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h1>Customers</h1>
          </div>
          <div className="flex  items-center mt-[30px] gap-[13px] font-PlusJakartaSans font-[500] text-[#A1A1AA] uppercase text-[11px] leading-[21px]">
            <h1>Shop</h1>
          </div>
          <div className="flex  items-center mt-[23px] gap-[13px] font-PlusJakartaSans font-[500] text-[13px] leading-[21px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M2.25 5.25V12.75C2.25 13.5784 2.92157 14.25 3.75 14.25H14.25C15.0784 14.25 15.75 13.5784 15.75 12.75V6.75C15.75 5.92157 15.0784 5.25 14.25 5.25H9.75L8.25 3.75H3.75C2.92157 3.75 2.25 4.42157 2.25 5.25Z"
                stroke="#3F3F46"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h1>Products</h1>
          </div>
          <div className="flex  items-center mt-[20px] gap-[13px] font-PlusJakartaSans font-[500] text-[13px] leading-[21px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M11.25 12.75H15L13.9463 11.6963C13.6605 11.4105 13.5 11.023 13.5 10.6188V8.25C13.5 6.29067 12.2478 4.62382 10.5 4.00606V3.75C10.5 2.92157 9.82843 2.25 9 2.25C8.17157 2.25 7.5 2.92157 7.5 3.75V4.00606C5.75221 4.62382 4.5 6.29067 4.5 8.25V10.6188C4.5 11.023 4.33946 11.4105 4.0537 11.6963L3 12.75H6.75M11.25 12.75V13.5C11.25 14.7426 10.2426 15.75 9 15.75C7.75736 15.75 6.75 14.7426 6.75 13.5V12.75M11.25 12.75H6.75"
                stroke="#3F3F46"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h1>Orders</h1>
          </div>
          <div className="flex  items-center mt-[20px] gap-[13px] font-PlusJakartaSans font-[500] text-[13px] leading-[21px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M12 6V12M9 8.25V12M6 10.5V12M4.5 15H13.5C14.3284 15 15 14.3284 15 13.5V4.5C15 3.67157 14.3284 3 13.5 3H4.5C3.67157 3 3 3.67157 3 4.5V13.5C3 14.3284 3.67157 15 4.5 15Z"
                stroke="#3F3F46"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h1>Reports</h1>
          </div>
          <div className="flex  items-center mt-[317px] gap-[13px] font-PlusJakartaSans font-[500] text-[13px] leading-[21px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M7.74347 3.23798C8.06327 1.92067 9.93673 1.92067 10.2565 3.23798C10.4631 4.08895 11.4381 4.49278 12.1859 4.03714C13.3435 3.33179 14.6682 4.65653 13.9629 5.81414C13.5072 6.56194 13.9111 7.53688 14.762 7.74347C16.0793 8.06327 16.0793 9.93673 14.762 10.2565C13.9111 10.4631 13.5072 11.4381 13.9629 12.1859C14.6682 13.3435 13.3435 14.6682 12.1859 13.9629C11.4381 13.5072 10.4631 13.9111 10.2565 14.762C9.93673 16.0793 8.06327 16.0793 7.74347 14.762C7.53688 13.9111 6.56194 13.5072 5.81414 13.9629C4.65653 14.6682 3.33179 13.3435 4.03714 12.1859C4.49278 11.4381 4.08895 10.4631 3.23798 10.2565C1.92067 9.93673 1.92067 8.06327 3.23798 7.74347C4.08895 7.53688 4.49278 6.56194 4.03714 5.81414C3.33179 4.65653 4.65653 3.33179 5.81414 4.03714C6.56194 4.49278 7.53688 4.08895 7.74347 3.23798Z"
                stroke="#3F3F46"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.25 9C11.25 10.2426 10.2426 11.25 9 11.25C7.75736 11.25 6.75 10.2426 6.75 9C6.75 7.75736 7.75736 6.75 9 6.75C10.2426 6.75 11.25 7.75736 11.25 9Z"
                stroke="#3F3F46"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h1>Settings</h1>
          </div>
          <div className="flex  items-center mt-[20px] gap-[13px] font-PlusJakartaSans font-[500] text-[13px] leading-[21px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M12.75 12L15.75 9M15.75 9L12.75 6M15.75 9L5.25 9M9.75 12V12.75C9.75 13.9926 8.74264 15 7.5 15H4.5C3.25736 15 2.25 13.9926 2.25 12.75V5.25C2.25 4.00736 3.25736 3 4.5 3H7.5C8.74264 3 9.75 4.00736 9.75 5.25V6"
                stroke="#3F3F46"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h1>Logout</h1>
          </div>
        </div>
        {/* main inner */}
        <div className="mt-[33px] max-w-[1212px] w-full ">
          <div className="flex gap-[8px]">
            <span className="font-[700] text-[16px] ">Hey Mariana -</span>
            <p className="text-gray-500">
              here’s what’s happening with your store today
            </p>
          </div>
          <div>
            <div className="grid  grid-cols-4 mt-[32px]  gap-[25px]  ">
              <div className=" p-[15px] border-gray-200 border-[1px] rounded-[10px] bg-[#FFFFFF]  ">
                <div className="text-[#71717A] font-[500]">Today’s Sale</div>
                <div className="flex  justify-between   mt-[11px]  ">
                  <div className="text-[21px] text-[#18181B] font-[700] ">
                    $12,426
                  </div>
                  <div className="flex text-[#22C55E] justify-center items-center gap-[4px]">
                    <div>+ 36%</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                    >
                      <path
                        d="M2.08333 4.66667L4.99999 1.75M4.99999 1.75L7.91666 4.66667M4.99999 1.75V9.25"
                        stroke="#22C55E"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="  p-[15px] border-gray-200 border-[1px] rounded-[10px] bg-[#FFFFFF]  ">
                <div className="text-[#71717A] font-[500]">Today’s Sale</div>
                <div className="flex  justify-between   mt-[11px]  ">
                  <div className="text-[21px] text-[#18181B] font-[700] ">
                    $12,426
                  </div>
                  <div className="flex text-[#22C55E] justify-center items-center gap-[4px]">
                    <div>+ 36%</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                    >
                      <path
                        d="M2.08333 4.66667L4.99999 1.75M4.99999 1.75L7.91666 4.66667M4.99999 1.75V9.25"
                        stroke="#22C55E"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className=" p-[15px] border-gray-200 border-[1px] rounded-[10px] bg-[#FFFFFF]  ">
                <div className="text-[#71717A] font-[500]">Today’s Sale</div>
                <div className="flex  justify-between   mt-[11px]  ">
                  <div className="text-[21px] text-[#18181B] font-[700] ">
                    $12,426
                  </div>
                  <div className="flex text-[#22C55E] justify-center items-center gap-[4px]">
                    <div>+ 36%</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                    >
                      <path
                        d="M2.08333 4.66667L4.99999 1.75M4.99999 1.75L7.91666 4.66667M4.99999 1.75V9.25"
                        stroke="#22C55E"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="  p-[15px] border-gray-200 border-[1px] rounded-[10px] bg-[#FFFFFF]  ">
                <div className="text-[#71717A] font-[500]">Today’s Sale</div>
                <div className="flex  justify-between   mt-[11px]  ">
                  <div className="text-[21px] text-[#18181B] font-[700] ">
                    $12,426
                  </div>
                  <div className="flex text-[#22C55E] justify-center items-center gap-[4px]">
                    <div>+ 36%</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                    >
                      <path
                        d="M2.08333 4.66667L4.99999 1.75M4.99999 1.75L7.91666 4.66667M4.99999 1.75V9.25"
                        stroke="#22C55E"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Chart-Section */}
          <div className="mt-[29px]  flex gap-[31px]   ">
            <div className="border pl-[25px] pb-[21px] pr-[17px] rounded-[10px] bg-[#FFFFFF] pt-[18px] max-w-[1189px] w-full">
              <div className="  font-PlusJakartaSans flex  justify-between items-center mt-[16px]">
                <div className=" w-[99px] items-center font-[700] text-[16px]">
                  Sales Report
                </div>
                <div className="flex items-center  justify-between max-w-[316px] w-full">
                  <button className="flex items-center    rounded-[5px] py-[6px] px-[12.5px] border-gray-300 border">
                    <div className="font-[700] text-gray-900"> 12 Months</div>
                  </button>
                  <button className="flex items-center  rounded-[5px] py-[6px] px-[12.5px] border-gray-300 border">
                    <div className="font-[700] text-gray-900"> 6 Months</div>
                  </button>
                  <button className="flex items-center  rounded-[5px] py-[6px] px-[12.5px] border-gray-300 border">
                    <div className="font-[700] text-gray-900"> 30 Days</div>
                  </button>
                </div>
                <button className="flex items-center gap-[7px] rounded-[5px] py-[6px] pl-[6px] pr-[9px] border-gray-300 border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                  >
                    <path
                      d="M8 6.33332V9.96968M8 9.96968L5.99999 8.1515M8 9.96968L10 8.1515M11.3333 13H4.66666C3.93028 13 3.33333 12.4573 3.33333 11.7879V3.30302C3.33333 2.63358 3.93028 2.0909 4.66666 2.0909H8.39052C8.56733 2.0909 8.7369 2.15475 8.86192 2.26841L12.4714 5.54975C12.5964 5.66341 12.6667 5.81756 12.6667 5.9783V11.7879C12.6667 12.4573 12.0697 13 11.3333 13Z"
                      stroke="#18181B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="font-[700] text-gray-900"> Export PDF</div>
                </button>
              </div>
              <div className="mt-[76px]    ">
                <Line
                  data={LinechartColorData}
                  options={options}
                  width={"700px"}
                />
              </div>
            </div>
            <div className="max-w-[383px] w-full   border pl-[27px] pr-[22px] rounded-[10px] bg-[#FFFFFF]">
              <div className="  font-PlusJakartaSans flex  justify-between items-center mt-[16px] ">
                <div className=" items-center font-[700] text-[16px] shrink-0">
                  Traffic Sources
                </div>

                <select
                  name=""
                  id=""
                  className="  outline-none  font-PlusJakartaSans text-[12px] font-[500] text-[#18181B]"
                >
                  <option value="Last 7 Days">Last 7 Days</option>
                  <option value="Last 7 Days">Last 30 Days</option>
                  <option value="Last 7 Days">Last 1 Month</option>
                  <option value="Last 7 Days">Last 6 Month </option>
                </select>
              </div>
              <div className="mt-[39px]">
                <div>
                  <div className="flex justify-between items-center font-PlusJakartaSans font-[500] ">
                    <h1 className=" ">Direct</h1>
                    <h1 className="">1,43,382</h1>
                  </div>
                  <div className=" mt-[8px] bg-gray-100 rounded-[5px]">
                    <div className="bg-[#4F46E5] w-[80%] h-[5px] rounded-[5px] "></div>
                  </div>
                  <div className="mt-[24px]">
                    <div>
                      <div className="flex justify-between items-center font-PlusJakartaSans  w-full font-[500] ">
                        <h1 className="">Referral</h1>
                        <h1 className=" ">87,974</h1>
                      </div>
                      <div className="  mt-[8px] bg-gray-100 rounded-[5px]">
                        <div className="bg-[#4F46E5] w-[60%] h-[5px] rounded-[5px]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[24px]">
                    <div>
                      <div className="flex justify-between items-center font-PlusJakartaSans  w-full font-[500] ">
                        <h1 className="  ">Social Media</h1>
                        <h1 className="">1,43,382</h1>
                      </div>
                      <div className=" mt-[8px] bg-gray-100 rounded-[5px]">
                        <div className="bg-[#4F46E5] w-[40%] h-[5px] rounded-[5px]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[24px]">
                    <div>
                      <div className="flex justify-between items-center font-PlusJakartaSans  font-[500] ">
                        <h1 className="  ">Direct</h1>
                        <h1 className=" ">1,43,382</h1>
                      </div>
                      <div className="  mt-[8px] bg-gray-100 rounded-[5px]">
                        <div className="bg-[#4F46E5] w-[20%] h-[5px] rounded-[5px]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Transactions-Section */}
          <div className="flex mt-[29px] gap-[31px] max-w-[1212px] w-full">
            <div className="w-[798px ] w-full  border  rounded-[10px] bg-[#FFFFFF]">
              <div className="flex justify-between mt-[18px] pl-[25px] pr-[20px]">
                <div>
                  <h1 className="text-[#18181B] text-[16px] font-[700]">
                    Transactions
                  </h1>
                  <p className="text-[#71717A] mt-[4px] text-[13px] font-[400] leading-[24px]">
                    Lorem ipsum dolor sit amet, consectetur adipis.
                  </p>
                </div>

                <button className="flex items-center gap-[8px] ">
                  <p className="text-[#4F46E5] text-[12px]">
                    {" "}
                    See All Transactions
                  </p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M4.625 2.79167L7.83333 6L4.625 9.20834"
                      stroke="#4F46E5"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-[31px] ">
                <div className="flex justify-between items-center  font-PlusJakartaSans pb-[19px] pl-[25px] pr-[20px]">
                  <div className="flex items-center rounded-[40px] bg-[#DCFCE7] pt-[2px] pb-[4px] pr-[11px] pl-[9px]  gap-[8px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                    >
                      <circle cx="4" cy="4" r="4" fill="#22C55E" />
                    </svg>

                    <h1 className="text-[#14532D]">Completed</h1>
                  </div>
                  <div className="max-w-[123px] w-full">
                    <div className="text-[13px] font-[700] leading-[22px]">
                      Visa card **** 4831
                    </div>
                    <div className="max-w-[89px] w-full text-[13px] font-[500] text-[#71717A] leading-[21px]">
                      Card payment
                    </div>
                  </div>
                  <div>
                    <div className="text-[13px] font-[700] leading-[22px] mt-[3px]">
                      $182.94
                    </div>
                    <div className="max-w-[89px] w-full text-[13px] font-[500] text-[#71717A] leading-[21px]">
                      Jan 17, 2022
                    </div>
                  </div>
                  <div>
                    <h1 className="text-[13px] text-[#71717A]">Amazon</h1>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5 12H5.01M12 12H12.01M19 12H19.01M6 12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM20 12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11C19.5523 11 20 11.4477 20 12Z"
                        stroke="#A1A1AA"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-between items-center  font-PlusJakartaSans py-[19px] border-y pl-[25px] pr-[20px]">
                  <div className="flex items-center rounded-[40px] bg-[#DCFCE7] pt-[2px] pb-[4px] pr-[11px] pl-[9px]  gap-[8px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                    >
                      <circle cx="4" cy="4" r="4" fill="#22C55E" />
                    </svg>

                    <h1 className="text-[#14532D]">Completed</h1>
                  </div>
                  <div className="max-w-[141px] w-full h-[46px]">
                    <div className="text-[13px] font-[700]">
                      Mastercard **** 6442
                    </div>
                    <div className="max-w-[89px] w-full text-[13px] font-[500] text-[#71717A] leading-[21px]">
                      Card payment
                    </div>
                  </div>
                  <div>
                    <div className="text-[13px] font-[700] leading-[22px] mt-[3px]">
                      $99.00
                    </div>
                    <div className="max-w-[89px] w-full text-[13px] font-[500] text-[#71717A] leading-[21px]">
                      Jan 17, 2022
                    </div>
                  </div>
                  <div>
                    <h1 className="text-[13px] text-[#71717A]">Facebook</h1>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5 12H5.01M12 12H12.01M19 12H19.01M6 12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM20 12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11C19.5523 11 20 11.4477 20 12Z"
                        stroke="#A1A1AA"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-between items-center  font-PlusJakartaSans py-[19px] border-y pl-[25px] pr-[20px]">
                  <div className="flex items-center rounded-[40px] bg-[#FEF9C3] pt-[2px] pb-[4px] pr-[11px] pl-[9px]  gap-[8px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                    >
                      <circle cx="4" cy="4" r="4" fill="#FACC15" />
                    </svg>

                    <h1 className="text-[#713F12]">Pending</h1>
                  </div>
                  <div className="max-w-[141px] w-full h-[46px]">
                    <div className="text-[13px] font-[700]">
                      Account ****882
                    </div>
                    <div className="max-w-[89px] w-full text-[13px] font-[500] text-[#71717A] leading-[21px]">
                      Card payment
                    </div>
                  </div>
                  <div>
                    <div className="text-[13px] font-[700] leading-[22px] mt-[3px]">
                      $99.00
                    </div>
                    <div className="max-w-[89px] w-full text-[13px] font-[500] text-[#71717A] leading-[21px]">
                      Jan 17, 2022
                    </div>
                  </div>
                  <div>
                    <h1 className="text-[13px] text-[#71717A]">Netflix</h1>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5 12H5.01M12 12H12.01M19 12H19.01M6 12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM20 12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11C19.5523 11 20 11.4477 20 12Z"
                        stroke="#A1A1AA"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-between items-center  font-PlusJakartaSans py-[19px] border-y pl-[25px] pr-[20px] pb-[20px]">
                  <div className="flex items-center rounded-[40px] bg-[#FEE2E2] pt-[2px] pb-[4px] pr-[11px] pl-[9px]  gap-[8px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                    >
                      <circle cx="4" cy="4" r="4" fill="#EF4444" />
                    </svg>

                    <h1 className="text-[#7F1D1D]">Canceled</h1>
                  </div>
                  <div className="max-w-[141px] w-full h-[46px]">
                    <div className="text-[13px] font-[700]">
                      Amex card **** 5666
                    </div>
                    <div className="max-w-[89px] w-full text-[13px] font-[500] text-[#71717A] leading-[21px]">
                      Card payment
                    </div>
                  </div>
                  <div>
                    <div className="text-[13px] font-[700] leading-[22px] mt-[3px]">
                      $199.24{" "}
                    </div>
                    <div className="max-w-[89px] w-full text-[13px] font-[500] text-[#71717A] leading-[21px]">
                      Jan 17, 2022
                    </div>
                  </div>
                  <div>
                    <h1 className="text-[13px] text-[#71717A]">Facebook</h1>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5 12H5.01M12 12H12.01M19 12H19.01M6 12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM20 12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11C19.5523 11 20 11.4477 20 12Z"
                        stroke="#A1A1AA"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Recent Customer Div */}

            <div className="max-w-[383px] w-full  border pb-[24px]  pt-[18px] pl-[27px] pr-[24px] rounded-[10px] bg-[#FFFFFF]">
              <div>
                <h1 className="text-[#18181B] text-[16px] font-[700]">
                  Recent Customers
                </h1>
                <p className="text-[#71717A] mt-[4px] text-[13px] font-[400] leading-[24px]">
                  Lorem ipsum dolor sit ametis.{" "}
                </p>
              </div>
              <div className="flex flex-col gap-[22px] mt-[29px]">
                <div className="">
                  <div className="flex gap-[82px]">
                    <div className="flex gap-[13px]">
                      <img src="/assets/recent_Customer1.svg" alt="" />
                      <div className="">
                        <h1 className="text-[#18181B] text-[13px] font-[700]">
                          Jenny Wilson
                        </h1>
                        <h1 className="text-[#71717A] mt-[3]">
                          w.lawson@example.com
                        </h1>
                      </div>
                    </div>

                    <div>
                      <h1 className="text-[#18181B] text-[13px] font-[700]">
                        $11,234
                      </h1>
                      <h1 className="text-[#71717A] mt-[3]">Austin</h1>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex gap-[82px]">
                    <div className="flex gap-[13px]">
                      <img src="/assets/recent_Customer2.svg" alt="" />
                      <div className="">
                        <h1 className="text-[#18181B] text-[13px] font-[700]">
                          Jenny Wilson
                        </h1>
                        <h1 className="text-[#71717A] mt-[3]">
                          w.lawson@example.com
                        </h1>
                      </div>
                    </div>

                    <div>
                      <h1 className="text-[#18181B] text-[13px] font-[700]">
                        $11,234
                      </h1>
                      <h1 className="text-[#71717A] mt-[3]">Austin</h1>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex gap-[82px]">
                    <div className="flex gap-[13px]">
                      <img src="/assets/recent_Customer3.svg" alt="" />
                      <div className="">
                        <h1 className="text-[#18181B] text-[13px] font-[700]">
                          Jenny Wilson
                        </h1>
                        <h1 className="text-[#71717A] mt-[3]">
                          w.lawson@example.com
                        </h1>
                      </div>
                    </div>

                    <div>
                      <h1 className="text-[#18181B] text-[13px] font-[700]">
                        $11,234
                      </h1>
                      <h1 className="text-[#71717A] mt-[3]">Austin</h1>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex gap-[82px]">
                    <div className="flex gap-[13px]">
                      <img src="/assets/recent_Customer4.svg" alt="" />
                      <div className="">
                        <h1 className="text-[#18181B] text-[13px] font-[700]">
                          Jenny Wilson
                        </h1>
                        <h1 className="text-[#71717A] mt-[3]">
                          w.lawson@example.com
                        </h1>
                      </div>
                    </div>

                    <div>
                      <h1 className="text-[#18181B] text-[13px] font-[700]">
                        $11,234
                      </h1>
                      <h1 className="text-[#71717A] mt-[3]">Austin</h1>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="flex items-center gap-[8px] mt-[27px]">
                <p className="text-[#151518] text-[12px]">
                  {" "}
                  See All Transactions
                </p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <g opacity="0.5">
                    <path
                      d="M5.25 2.91668L9.33333 7.00001L5.25 11.0833"
                      stroke="#151518"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
