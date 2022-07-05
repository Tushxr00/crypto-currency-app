import React from "react";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import { Layout, Space, Typography } from "antd";
import {
  Navbar,
  HomePage,
  Cryptocurrency,
  CryptoDetails,
  News,
  Exchanges,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cryptocurrency" element={<Cryptocurrency />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/news" element={<News />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Crypto Hub <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <span
              style={{
                color: "white",
                textAlign: "center",
                pointerEvents: "none",
              }}
            >
              |
            </span>
            <Link to="/cryptocurrency">Crypto currency</Link>
            <span
              style={{
                color: "white",
                textAlign: "center",
                pointerEvents: "none",
              }}
            >
              |
            </span>
            <Link to="/exchanges">Exchanges</Link>
            <span
              style={{
                color: "white",
                textAlign: "center",
                pointerEvents: "none",
              }}
            >
              |
            </span>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
