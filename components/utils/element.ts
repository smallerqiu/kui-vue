export function isEmptyNode(vnode:any = {}) {
  return !(vnode.eml || vnode.tag || (vnode.text && vnode.text.trim() !== ""));
}

export function getChildren(children = [], name:string) {
  // return child.filter(c => !isEmptyNode(c, name) )
  return children.filter((c:any) => {
    let tag_name = "";
    if (name && c.componentOptions != null && c.componentOptions.Ctor != undefined) {
      tag_name = c.componentOptions.Ctor.extendOptions.name;
    }
    if (!isEmptyNode(c) && name !== tag_name) {
      return true;
    } else {
      return false;
    }
  });
}



//此处不能判断数组，要判断数组自行判断
export function isNotEmpty(str:any) {
  return str !== "" && str !== undefined && str !== null;
}
export function isEmpty(str:any) {
  return str === "" || str === undefined || str === null || str.length === 0;
}
 