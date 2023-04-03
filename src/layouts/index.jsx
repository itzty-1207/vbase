import React, {useState, useMemo, useCallback} from "react";
import {Layout, Menu, theme} from 'antd';
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
import {useNavigate} from 'react-router-dom';
import {getMenus} from '@/commons/menus';
import logoSrc from '@/assets/yewu.svg';
import style from './index.module.less';

const {Header, Sider, Content} = Layout;
export default function Layouts() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {token: {colorBgContainer}} = theme.useToken();

  const items = useMemo(() => {
    const routeList = getMenus();
    console.log('routeList', routeList);
    return routeList;
  }, [])

  const handleClick = useCallback((options) => {
    const path = options.key;
    navigate(path);
  }, [navigate])

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
            defaultSelectedKeys={[1]}
            items={items}
            onClick={handleClick}
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

