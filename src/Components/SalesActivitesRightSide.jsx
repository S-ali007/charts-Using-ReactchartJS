import React from "react";

function SalesActivitesRightSide() {
  return (
    <div className="max-w-[304px] w-full flex flex-col gap-[24px] mt-[24px]  ">
      <div className="flex  justify-end   rounded-[4px] text-blue-700 font-[500px]">
       
        <select
          name="cars"
          id="cars"
          className="max-w-[187px] w-full py-[10px] px-[5px] border-[1px] border-blue-700 rounded-[4px] font-bold"
        >
          <option value="Pick a Date Range">Pick a Date Range </option>
          <option value="saab">1</option>
          <option value="opel">2</option>
          <option value="audi">3</option>
        </select>
      </div>

      <div className="Total-SignIn flex flex-col gap-[28px]  ">
        <div className="  text-[16px] py-[28px]  max-w-[304px] w-full flex flex-col items-center  border-[1px] rounded-[4px]">
          <h1>Total User Sign-in</h1>
          <div className="text-[24px] font-semibold  ">80,239</div>
        </div>
        <div className="  text-[16px] py-[28px]  max-w-[304px] w-full flex flex-col items-center  border-[1px] rounded-[4px]">
          <h1>Total User Sign-in</h1>
          <div className="text-[24px] font-semibold  ">80,239</div>
        </div>
        <div className="  text-[16px] py-[28px]  max-w-[304px] w-full flex flex-col items-center  border-[1px] rounded-[4px]">
          <h1>Total User Sign-in</h1>
          <div className="text-[24px] font-semibold  ">80,239</div>
        </div>
      </div>
    </div>
  );
}

export default SalesActivitesRightSide;
