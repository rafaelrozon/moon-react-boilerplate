import React, { Component } from 'react';
import styled from 'styled-components';
import { Layout, Menu, Row, Col } from 'antd';
import AppProvider from '@provider/index';
import { Routes, Links } from '@routes/index';
import './App.css'

const {
    Header, Footer, Sider, Content,
} = Layout;


const AppStyles = styled.div`
  background: lightblue;
  height: 100%;
`;

class App extends Component {
    render() {
        return (
            <AppProvider>
                <AppStyles className="app">
                <Layout>
                    <Header>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                        >
                            <Menu.Item>
                                <Links.Home withIcon />
                            </Menu.Item>
                            <Menu.Item>
                                <Links.Todos withIcon />
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content>
                        <Routes />
                    </Content>
                </Layout>


                </AppStyles>
            </AppProvider>
        );
    }
}

export default App;