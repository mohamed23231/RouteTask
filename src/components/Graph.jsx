import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const Graph = ({ transactions }) => {
  const data = {
    labels: transactions.map((transaction) => transaction.date),
    datasets: [
      {
        label: "Transaction Amount",
        data: transactions.map((transaction) => transaction.amount),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <h3 className=" my-5 text-center text-lime-600 text-4xl font-extrabold">
        User Graph
      </h3>
      <Bar data={data} options={options} />;
    </>
  );
};

export default Graph;
