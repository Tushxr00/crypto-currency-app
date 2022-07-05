import React from "react";
import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   LineElement,
//   PointElement,
//   LinearScale,
//   Title,
//   CategoryScale,
// } from "chart.js";
import Chart from "chart.js/auto";
import { Typography, Row, Col } from "antd";

// ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const LineChart = (props) => {
  const coinPrice = [];
  const coinTimestamp = [];

  console.log(props);

  for (let i = props.coinHistory?.data?.history?.length - 1; i > 0; i--) {
    coinPrice.push(props.coinHistory.data.history[i].price);
    coinTimestamp.push(
      new Date(
        Number(`${props.coinHistory.data.history[i].timestamp}000`)
      ).toLocaleDateString()
    );
  }

  console.log({ coinPrice, coinTimestamp });

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    elements: {
      point: {
        radius: 0,
      },
    },
    scale: {
      ticks: {
        beginAtZero: true,
      },
    },
    legend: {
      display: true,
    },
  };

  if (!props.coinHistory) return "loading...";

  return (
    <React.Fragment>
      <Row className="chart-header">
        <Typography.Title level={2} className="chart-title">
          {props.coinName} Price Chart
        </Typography.Title>
        <Col className="price-container">
          <Typography.Title level={5} className="price-change">
            {props.coinHistory?.data?.change} %
          </Typography.Title>
          <Typography.Title level={5} className="current-price">
            Current {props.coinName} Price: ${props.currentPrice}
          </Typography.Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </React.Fragment>
  );
};

export default LineChart;
