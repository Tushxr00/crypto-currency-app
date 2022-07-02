import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Layout, Space, Typography } from "antd";
import { Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  );
};

export default App;

