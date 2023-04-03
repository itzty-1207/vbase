import {DashboardOutlined,OrderedListOutlined} from '@ant-design/icons';
import {plainToTree, convertToMenus} from '@/utils';

function getMenuList(){
  return [
    {id: 1, title: '工作台', path: '/home', icon: <DashboardOutlined />},
    {id: 1.1, parentId: 1, title: '路由集合', path: '/home/router'},
    {id: 2, title: '虚拟列表', path: '/virtualList', icon: <OrderedListOutlined />},
    {id: 2.1, parentId: 2, title: '定高虚拟列表', path: '/virtualList/fixed'},
    {id: 2.2, parentId: 2, title: '不定高虚拟列表', path: '/virtualList/unFixed'},
  ]
}

function getRoutes(){
  const list = getMenuList();
  const plains = plainToTree(list);
  const routes = convertToMenus(plains)
  
  return routes;
}

export {getMenuList, getRoutes};


