import React from "react";
import { PieChart, Pie, Tooltip, Legend } from "recharts";
interface Props {

    data: { category: string; value: number }[];
  }

export const PieChartComponent = (props:Props) => {
  return (
    <PieChart width={400} height={400}>
      <Pie dataKey="value" isAnimationActive={false} data={props.data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

