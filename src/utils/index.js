// 树的扁平化
function treeToPlain(dataSource) {
  const result = [];
  const loop = (nodes, parentId) =>
    (nodes || []).forEach((item) => {
      const { children, id, ...others } = item;
      result.push({ id, parentId, ...others });

      loop(children, id);
    });

  loop(dataSource);

  return result;
}

// 扁平数据转树
function plainToTree(dataSource) {
  const topNodes = dataSource.filter((item) => !item.parentId);

  const loop = (nodes) =>
    nodes.forEach((node) => {
      node.children = dataSource.filter((it) => it.parentId === node.id);

      loop(node.children);
    });

  loop(topNodes);
  return topNodes;
}

// tree转menus
function convertToMenus(dataSource) {
  const transform = (_dataSource) => {
    return _dataSource.map((nodes) => {
      const { path, title, children, icon } = nodes || {};
      const _children = children ? transform(children) : null;
      const item = {
        key: path,
        label: title,
        icon,
      };
      if (children?.length) {
        item["children"] = _children;
      }
      return item;
    });
  };

  return transform(dataSource);
}

export { plainToTree, treeToPlain, convertToMenus };
