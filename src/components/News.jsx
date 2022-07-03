import React, { useEffect, useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";

const News = (props) => {
  const demoImage =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
  const count = props.simplified ? 10 : 44;
  const [newList, setNewList] = useState([]);
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count,
  });
  const { data: cryptosList } = useGetCryptosQuery(100);

  const newsData = cryptoNews?.value;
  const coinList = cryptosList?.data?.coins;

  useEffect(() => {
    setNewList(newsData);
  }, [newsData]);

  if (!newsData) return "Loading ...";

  return (
    <Row gutter={[24, 24]}>
      {!props.simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a news crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Select.Option value="Cryptocurrency">Cryptocurrency</Select.Option>
            {coinList.map((coin) => (
              <Select.Option value={coin.name}>{coin.name}</Select.Option>
            ))}
          </Select>
        </Col>
      )}
      {newList?.map((news, index) => (
        <Col xs={24} sm={12} lg={8} key={index}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Typography.Title className="news-title" level={4}>
                  {news.name}
                </Typography.Title>
                <img
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt={news.name}
                  className="news-image"
                />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)} ...`
                  : `${news.description}`}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                    alt={news.provider[0]?.name}
                  />
                  <Typography.Text className="provider-name">
                    {news.provider[0]?.name}
                  </Typography.Text>
                </div>
                <Typography.Text>
                  {moment(news.datePublished).startOf(`ss`).fromNow()}
                </Typography.Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
