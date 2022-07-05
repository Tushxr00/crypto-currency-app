import React from "react";
import { Line } from "react-chartjs-2";
import { Typography, Row, Col } from "antd";

const LineChart = (props) => {
  return (
    <React.Fragment>
      <Row className="chart-header">
        <Typography.Title level={2} className="chart-title">
          {props.coinName} Price Chart
        </Typography.Title>
        <Col className="price-container">
          <Typography.Title level={5} className="price-change">
            {props.coinHistory?.data?.change}
          </Typography.Title>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default LineChart;
