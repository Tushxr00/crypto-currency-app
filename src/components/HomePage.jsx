import millify from "millify";
import React from "react";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrency, News } from "../components";

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(12);

  const globalStats = data?.data?.stats;
  if (isFetching) return "Loading...";

  return (
    <React.Fragment>
      <Typography.Title level={2} className="heading">
        Global Crypto Stats
      </Typography.Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={globalStats.totalCoins}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the World
        </Typography.Title>
        <Typography.Title level={3} className="show-more">
          <Link to="/cryptocurrency"> Show More</Link>
        </Typography.Title>
      </div>
      <Cryptocurrency simplified />
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">
          Latest Crypto News
        </Typography.Title>
        <Typography.Title level={3} className="show-more">
          <Link to="/cryptocurrency"> Show More</Link>
        </Typography.Title>
      </div>
      <News simplified />
    </React.Fragment>
  );
};

export default HomePage;
