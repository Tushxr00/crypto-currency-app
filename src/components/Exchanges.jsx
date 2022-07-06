import React, { useEffect, useState } from "react";
import millify from "millify";
import { Typography, Avatar, Select, Table } from "antd";
import Loader from "./Loader";

import {
  useGetExchangesQuery,
  useGetCryptosQuery,
} from "../services/cryptoApi";

const columns = [
  {
    title: "Exchange",
    dataIndex: "exchange",
    key: "exchange",
    render: ({ iconUrl, name }) => (
      <div>
        <Avatar className="exchange-image" src={iconUrl} />
        <Typography.Text>
          <strong>{name}</strong>
        </Typography.Text>
      </div>
    ),
  },
  {
    title: "24h Trade Volume",
    dataIndex: "volume",
    key: "volume",
  },
  {
    title: "Number Of Markets",
    dataIndex: "market",
    key: "market",
  },
  {
    title: "Price",
    key: "price",
    dataIndex: "price",
  },
];

const Exchanges = () => {
  const { data: cryptosList } = useGetCryptosQuery(100);
  const [coinArray, setCoinArray] = useState([]);
  const [coinId, setCoinId] = useState("");

  console.log({ cryptosList });
  useEffect(() => {
    if (cryptosList?.data) {
      setCoinArray(cryptosList.data.coins);
      setCoinId(cryptosList.data.coins[0].uuid);
    }
  }, [cryptosList]);

  console.log({ coinArray });
  console.log({ coinId });
  const { data, isFetching } = useGetExchangesQuery(coinId);
  const exchangesList = data?.data?.exchanges;
  const exchangesData = data?.data?.exchanges.map((exchange) => ({
    exchange: { name: exchange.name, iconUrl: exchange.iconUrl },
    volume: `${millify(Number(exchange["24hVolume"]))}`,
    market: exchange.numberOfMarkets,
    price: `${millify(Number(exchange.price))}`,
  }));
  console.log({ exchangesData });
  //   // Note: To access this endpoint you need premium plan

  if (!exchangesList) return <Loader />;

  return (
    <React.Fragment>
      <Typography.Title level={1}> Exchange Center </Typography.Title>
      <Typography.Text>
        Information about a specific coin on different exchange platforms
      </Typography.Text>
      <br />
      <Select
        defaultValue={coinArray[0].name}
        className="select-timeperiod"
        placeholder="Select Time Period"
        onChange={(value) => setCoinId(value)}
        style={{ marginBottom: "10px" }}
      >
        {coinArray?.map((data) => {
          return <Select.Option key={data.uuid}>{data.name}</Select.Option>;
        })}
      </Select>
      <Table
        columns={columns}
        dataSource={exchangesData}
        style={{ textAlign: "center" }}
      />
    </React.Fragment>
  );
};

export default Exchanges;

