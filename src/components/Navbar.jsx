import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import icon from "../images/633px-Cryptocurrency_Logo.svg.png";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/"> Crypto Hub</Link>
          hi
        </Typography.Title>
        {/* <Button ClassName="menu-control-container"></Button> */}
      </div>
    </div>
  );
};

export default Navbar;
