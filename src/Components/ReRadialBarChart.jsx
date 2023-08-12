import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
function ReRadialBarChart() {
  const data = [
    {
      name: "Operations",
      uv: 1, 
      pv: 10,
      fill: "#EAB308",
    },
    {
      name: "Marketing",
      uv: 2,
      pv: 20,
      fill: "#6366F1",
    },
    {
      name: "HR",
      uv: 3,
      pv: 30,
      fill: "#EC4899",
    },
    {
      name: "Finance",
      uv: 4, 
      pv: 40,
      fill: "#1D4ED8",
    },
    
  ];
  const style = {
    top: "100%",
    right: 90,
    // transform: "translate(0, -50%)",
    lineHeight: "24px",
  };
  return (
    <div>
      <RadialBarChart
        width={500}
        height={300}
        cx={150}
        cy={150}
        innerRadius={70}
        outerRadius={140}
        barSize={10}
        data={data}
        startAngle={90} // Start from the top (clockwise)
        endAngle={-270} // End at the top (clockwise)



      >
        <RadialBar
        //   minAngle={15}
        //   label={{ position: "insideStart", fill: "#fff" }}
          background
          dataKey="pv"
          cornerRadius={10} // Adjust the corner radius value as needed

         
        />
        <Legend
          iconSize={10}
        //   layout="horizontal"
        //   verticalAlign="middle"
          wrapperStyle={style}
          border-radius= {"50%"}/* Make the legends circular */

        />
      </RadialBarChart>
    </div>
  );
}
export default ReRadialBarChart;