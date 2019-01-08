import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import logo from "./logo.svg";

import "./global.css";

class Default extends Component {
  render() {
    const { Header, Content, Footer } = Layout;

    return (
      <div className="App">
        <Layout>
          <Header
            style={{
              display: "flex",
              position: "fixed",
              zIndex: 1,
              width: "100%"
            }}
          >
            <div className="logo">
              <img src={logo} alt="Logo" style={{ height: 36 }} />
            </div>
            <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
              <Menu.Item key="1">
                <Link to="/">Dashboard</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/posts">Posts</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px", marginTop: 100 }}>
            <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Andux ©2018</Footer>
        </Layout>
      </div>
    );
  }
}

export default Default;