import React, {useMemo} from "react";
import {Avatar, List} from 'antd';
import {getMenuList} from '@/commons/menus';
import {useNavigate} from "react-router-dom";
import s from './index.module.less';

export default function HomeRouter() {
  const navigate = useNavigate();

  const data = useMemo(() => {
    const menus = getMenuList();
    const list = menus.filter(item => item.parentId);
    return list;
  }, [])

  return (
    <div className={s.root}>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              onClick={() => navigate(item?.path)}
              key={index}
              avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
              title={<a href={item?.path} className={s.router_title}>{item.title}</a>}
              description={`VBASE + ${item?.path}`}
            />
          </List.Item>
        )}
      />
    </div>
  )
}