// 1. 

const list = [{
  id: 1,
  children: [{
    id: 11
  },
  {
    id: 12
  }]
}, {
  id: 2,
  children: [{
    id: 21,
    children: [{
      id: 211
    }]
  }],
}, {
  id: 3
}]

function tree2flat(list, pid) {
  const arr = []
  list.forEach(node => {
    if (pid) node.pid = pid
    if (!node.children) {
      arr.push(node)
    } else {
      const item = { ...node }
      arr.push(...tree2flat(node.children, node.id))
      delete item.children
      arr.push(item)
    }
  });
  return arr
}
const res1 = tree2flat(list)
console.log('res1: ', res1); // [{ id: 11, pid: 1 }, { id: 12, pid: 1 }, { id: 1 }, { id: 211, pid: 21 }, { id: 21, pist d: 2 }, { id: 2 }, { id: 3 }]

