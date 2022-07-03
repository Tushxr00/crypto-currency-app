import React, { useEffect, useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const News = (props) => {
  const count = props.simplified ? 10 : 44;
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: count,
  });
  const newsData = cryptoNews?.value;
  const [newList, setNewList] = useState([]);

  const demoImage =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

  useEffect(() => {
    setNewList(newsData);
  }, [newsData]);
  console.log({ cryptoNews });
  console.log({ newsData });

  if (!newsData) return "Loading ...";
  return (
    <Row gutter={[24, 24]}>
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
