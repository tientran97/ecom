import React from "react";
import './Chart.css'
import useFetchCollection from "../../customHooks/useFetchCollection";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Order Status Chart",
    },
  },
};
const Chart = () => {
  const ordersFetch = useFetchCollection("orders");
  const array = [];
  console.log("🚀 ~ file: Chart.jsx ~ line 36 ~ Chart ~ array", array);
  ordersFetch.data.map((item) => {
    const { orderStatus } = item;
    array.push(orderStatus);
  });
  const getOrderCount = (arr, value) => {
    return arr.filter((n) => n === value).length;
  };

  const placed = getOrderCount(array, "Order Placed...");
  const processing = getOrderCount(array, "Processing...");
  const shipping = getOrderCount(array, "Delivering...");
  const delivered = getOrderCount(array, "Delivered");
  const data = {
    labels: ["Placed Order", "Processing", "Delivering", "Delivered"],
    datasets: [
      {
        label: "Order count",
        data: [placed, processing, shipping, delivered],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <section className="chart-container">
      <Bar options={options} data={data} />
    </section>
  );
};

export default Chart;
