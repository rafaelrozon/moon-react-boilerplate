import React, { Component } from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import AppProvider from '~/provider';
import { Routes, Links } from '~/routes';
import './App.css'

const { Header, Content } = Layout;


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
