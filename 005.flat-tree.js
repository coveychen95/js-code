// 1. tree to flat 
// 树结构扁平化

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
    if (node.children) {
      const item = { ...node }
      arr.push(item, ...tree2flat(node.children, node.id))
      delete item.children
    } else {
      arr.push(node)
    }
  });
  return arr
}
const res1 = tree2flat(list)
console.log('res1: ', res1); // [{"id":1},{"id":11,"pid":1},{"id":12,"pid":1},{"id":2},{"id":21,"pid":2},{"id":211,"pid":21},{"id":3}]

// 2. flat to tree
// 扁平结构转树结构
const arr = [
  { id: 1 },
  { id: 11, pid: 1 },
  { id: 12, pid: 1 },
  { id: 2 },
  { id: 21, pid: 2 },
  { id: 211, pid: 21 },
  { id: 3 }
]

function flat2tree(arr) {
  const map = {}
  const res = []
  arr.forEach(node => {
    map[node.id] = node
  })
  arr.forEach(node => {
    if (node.pid) {
      const children = map[node.pid].children || []
      children.push(node)
      map[node.pid].children = children
      delete node.pid
    } else {
      res.push(node)
    }
  })
  return res
}

const res2 = flat2tree(arr)
console.log('res2: ', JSON.stringify(res2)); 
// [{ 
//   "id": 1,
//   "children": [{ 
//     "id": 11
//   }, {
//     "id": 12
//   }]
// }, { 
//   "id": 2,
//   "children": [{ 
//     "id": 21, 
//     "children": [{ 
//       "id": 211
//     }]
//   }]
// }, {
//   "id": 3
// }]