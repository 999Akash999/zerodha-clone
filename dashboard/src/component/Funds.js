import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Funds = () => {
  const data = {
    labels: ["Available margin", "Used margin"],
    datasets: [
      {
        data: [3740, 0],
        backgroundColor: ["#4184f3", "#d3d3d3"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <section>
      <h3 className="title">Funds</h3>
      <Doughnut data={data} />
    </section>
  );
};

export default Funds;
