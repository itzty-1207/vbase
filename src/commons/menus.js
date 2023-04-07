import { DashboardOutlined, OrderedListOutlined, LineChartOutlined } from "@ant-design/icons";
import { plainToTree, convertToMenus } from "@/utils";

import HomeRouter from "@/pages/home-router";
import Fixed from "@/pages/virtualList/fixed";
import Unfixed from "@/pages/home-router";

function getMenuList() {
  return [
    { id: 1, title: "工作台", path: "/home", icon: <DashboardOutlined /> },
    { id: 1.1, parentId: 1, title: "路由集合", path: "/home/router", component: <HomeRouter /> },
    { id: 2, title: "虚拟列表", path: "/virtualList", icon: <OrderedListOutlined /> },
    { id: 2.1, parentId: 2, title: "定高虚拟列表", path: "/virtualList/fixed", component: <Fixed /> },
    { id: 2.2, parentId: 2, title: "不定高虚拟列表", path: "/virtualList/unFixed", component: <Unfixed /> },
    { id: 3, title: "图表合集", path: "/echarts", icon: <LineChartOutlined /> },
  ];
}

function getMenus() {
  const list = getMenuList();
  const plains = plainToTree(list);
  const menus = convertToMenus(plains);

  return menus;
}

export { getMenuList, getMenus };
