// 数组扁平化
const arr = [1, 2,[3, [4]]]

// 1. 数组自带的 flat 方法
let res1 = arr.flat()
console.log('res1: ', res1); // [ 1, 2, 3, [ 4 ] ]
let res2 = arr.flat(Infinity)
console.log('res2: ', res2); // [ 1, 2, 3, 4 ]

// 2. flatMap
// Array.prototype.flatMap()
// flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。
// 它与 map 连着深度值为 1 的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。
let res3 = arr.flatMap(num => num)
console.log('res3: ', res3); // [ 1, 2, 3, [ 4 ] ]
function flatMapArr(arr) {
  return arr.flatMap(val => Object.prototype.toString.call(val) === '[object Array]' ? flatMapArr(val) : val)
}
let res4 = flatMapArr(arr)
console.log('res4: ', res4); // [ 1, 2, 3, 4 ]

// 3. 解构赋值
function flatArr(arr) {
  const res = []
  arr.forEach(val => {
    if (Object.prototype.toString.call(val) === '[object Array]') {
      res.push(...flatArr(val))
    } else {
      res.push(val)
    }
  });
  return res
}
let res5 = flatArr(arr)
console.log('res5: ', res5); // [ 1, 2, 3, 4 ]

