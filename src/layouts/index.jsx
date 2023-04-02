import React, {useState} from "react";
import {Layout, Menu, theme} from 'antd';
import {MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined} from '@ant-design/icons';
import logoSrc from '@/assets/yewu.svg';
import style from './index.module.less';

const {Header, Sider, Content} = Layout;
export default function Layouts() {
  const [collapsed, setCollapsed] = useState(false);
  const {token: {colorBgContainer}} = theme.useToken();

  return (
    <div>
      <Layout className={style.layoutContainer}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className={style['logo-container']}>
            <img src={logoSrc} alt="" className={style[collapsed ? 'img-single' : 'img-element']} />
            {!collapsed && <span className={style.logoText}>业务合集</span>}
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1', icon: <UserOutlined />, label: 'nav 1',
                children: [
                  {key: '21', icon: <VideoCameraOutlined />, label: 'nav 2'},
                  {key: '31', icon: <UploadOutlined />, label: 'nav 3'},
                ]
              },
              {key: '2', icon: <VideoCameraOutlined />, label: 'nav 2'},
              {key: '3', icon: <UploadOutlined />, label: 'nav 3'},
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header style={{padding: 0, background: colorBgContainer}}>
            <span>
              {collapsed ? <MenuUnfoldOutlined className={style['trigger-icon']} onClick={() => setCollapsed(!collapsed)} /> : <MenuFoldOutlined className={style['trigger-icon']} onClick={() => setCollapsed(!collapsed)} />}
            </span>
          </Header>
          <Content style={{margin: '24px 16px', padding: 24, minHeight: 280, background: colorBgContainer}}>
            Content
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

