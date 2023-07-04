import React, {useState, useCallback, useMemo, useEffect} from "react";
import s from './index.module.less';

export default function Fixed() {
  // 1. 列表无限滚动
  // 下拉到底，继续加载数据并且拼接
  // 数据太多，要做虚拟列表展示

  // 2. 虚拟列表
  // 只加载可视区域内需要渲染的列表项
  // 监听滚动事件，徐然出需要渲染的列表项，并将非可视区域内的列表项删除
  //（1）计算当前可视区域起始数据索引
  //（2）计算当前可视区域结束数据索引
  //（3）计算当前可视区域内的所有数据，并渲染到页面中
  //（4）计算起始索引对应的数据在整个列表中的便宜位置，并且设置到列表上

  // 滚动
  // 容器为了监听滚动事件 撑开元素让其可以滚动 + 展示内容
  //（1）容器 + 撑开高度元素 + 真正展示内容的元素

  // 监听滚动
  // scrollTop

  // 得出最终想要的数据
  // 列表总高度：listHeight = listData.length * itemSize
  // 可显示的列表项数：visibleCount = Math.ceil(screenHeight / itemSize)
  // 数据的起始索引：startIndex = Math.floor(scrollTop / itemSize)
  // 数据的结束索引：startIndex + visibleCount
  // 真正展示的列表数据：listData.slice(startIndex, endIndex)

  // 无限滚动
  // 在滚动东个监听事件里，去判断end现在是否已经到达了所有数据的末尾
  // 重新获取新的数据，拼接到listData上
  const [itemSize, setItemSize] = useState(100);
  const [listData, setListData] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  let startOffset = 0;
  const screenHeight = useMemo(() => {
    return document.documentElement.clientHeight || document.body.clientHeight;
  }, [])

  const visibleCount = useMemo(() => {
    return Math.ceil(screenHeight / itemSize);
  }, [itemSize, screenHeight])


  const visibleData = useMemo(() => {
    return listData.slice(start, Math.min(end, listData.length));
  }, [end, listData, start])

  const listHeight = useMemo(() => {
    return listData.length + itemSize;
  }, [itemSize, listData.length])

  return (
    <div className={s.root}>
      <div className={s.infinite_scroll_container}>
        <div className={s.scroll_top_btn}>回到顶部</div>

        <div className={s.infinite_hold_box}></div>
      </div>
    </div>
  )
}