import React from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
const { Header, Content } = Layout;
function NavBar(props) {
    return (
        <div>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu className='menu'
                        theme="light"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">HomePage</Menu.Item>
                        <Menu.Item key="2">Enter Question</Menu.Item>
                        <Menu.Item key="3" style={{}}>User</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>

                    <div style={{ background: '#fff', padding: 24 }}>Content
                        aasss <br></br>
                    </div>
                </Content>
            </Layout>
        </div>
    );
}

export default NavBar;