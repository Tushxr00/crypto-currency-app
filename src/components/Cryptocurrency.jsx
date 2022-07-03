import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrency = (props) => {
  const count = props.simplified ? 10 : 100;
  const { data: cryptosList } = useGetCryptosQuery(count);
  const data = cryptosList?.data?.coins;
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    console.log(data);
    setCryptos(data);
  }, [data]);

  if (!cryptos) return "Loading ...";

  return (
    <React.Fragment>
      <Row gutter={[32, 32]} className="cryptos-card-container">
        {cryptos.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                hoverable
                extra={
                  <img
                    className="crypto-image"
                    src={currency.iconUrl}
                    alt={`${currency.name} logo`}
                  />
                }
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default Cryptocurrency;
