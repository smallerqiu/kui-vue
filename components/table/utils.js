
/**
 * 列目按左中右排列
 * @param {*} cols 
 */
export function sortFixedCol(cols) {
  let middleCol = cols.filter(c => !c.fixed)
  let leftCol = cols.filter(c => c.fixed == 'left').map(x => {
    x.width = x.width || 150
    return x
  })
  let rightCol = cols.filter(c => c.fixed == 'right').map(x => {
    x.width = x.width || 150
    return x
  })

  if (leftCol.length) {
    leftCol[leftCol.length - 1].last = true
  }
  if (rightCol.length) {
    rightCol[0].first = true
  }
  return { columns: [].concat(leftCol, middleCol, rightCol) }
}
/***
 * 是否有子集
 */
export function hasChild(data) {
  return data ? data.filter(item => item.children && item.children.length > 0).length > 0 : false
}
/**
 * 多级表头重新排列成一列
 * @param {*} cols 
 */
export function sortColumnsOnline(cols) {
  const columns = []
  const setCol = (data) => {
    data.forEach((col, i) => {
      if (col.children && col.children.length > 0) {
        setCol(col.children)
      } else {
        columns.push(col)
      }
    })
  }
  setCol(cols)
  return columns
}
/**
 * 查找重新排序之后的item
 * @param {*} cols 
 */
export function findItem(item, cols) {
  let newItem = null
  cols.forEach(col => {
    if (col.key == item.key && col.title == item.title) {
      newItem = col
    }
    if (!newItem && col.children) {
      newItem = findItem(item, col.children)
    }
  })
  return newItem
}

/**
 * 取子集最大列数，就是横向合并多少列
 * @param {*} cols 
 */
export function getColSpan(cols) {
  let len = 0;
  cols.forEach(col => {
    if (!col.children) {
      len++
    } else {
      let l = getColSpan(col.children)
      len += l
    }
  })
  return len
}

/**
 * 纵树 排列成 横树，多级表头重新排列，并计算行和列的合并填充
 */
export function sortHeaderCols(cols) {
  let columns = JSON.parse(JSON.stringify(cols))
  let newCols = [], lastChid = null;
  const setTR = (col) => {
    let b = [];
    col.forEach((c) => {
      if (c.children) { //取同等级子节点
        b = b.concat(c.children);
        c.colSpan = getColSpan(c.children)
        delete c.children
      }
    });
    if (b.length) {
      lastChid = b
      newCols.push(col);
      setTR(b);
    }
  };
  setTR(columns);
  lastChid && newCols.push(lastChid)

  let len = newCols.length
  newCols.forEach((col, i) => {
    col.forEach(a => {
      if (!a.colSpan) {
        a.rowSpan = len - i
      }
    })
  });
  return newCols;
}


