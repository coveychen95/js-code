// compose 函数
// 1. 函数式编程中 如果 涉及函数多层调用
// 如 res = a(b(c(d(e(num))))) 返回计算结果 代码看起来就会很难看 可读性大大降低
// compose 的目的就是把函数的嵌套执行解构为顺序执行 fn = compose(a,b,c,d,e) ; res = fn(num)
// 这种感觉突然有点树结构扁平的有没有



function a (param) {
  return param + ' a ; '
}

function b (param) {
  return param + ' b ; '
}

function c (param) {
  return param + ' c ; '
}

// 1. 过程式
// 提取最后一个函数
// 传入参数 -> 执行函数 -> 记录结果
// 返回一个函数
function compose (...funcs) {
  const len = funcs.length
  let count = len - 1
  let res
  return function fn(...args) {
    res = funcs[count].apply(this, args)
    if (count === 0) {
      return res
    }
    count--
    return fn.call(null, res)
  }
}

const addStr = compose(a,b,c)
const res = addStr(111) // 111 c ;  b ;  a ; 

// 2. reduce
// a(b(c(d(e(11)))))
// 降级处理
// let de = d(e(11)         res = a(b(c(de(11))))
// let cde = c(de(11))      res = a(b(cde(11)))
// let bcde = b(cde(11))    res = a(bcde(11))
// let abcde = a(bcde(11))  res = abcde(11)
function compose2 (...funcs) {
  return function (...args) {
    return funcs.reverse().reduce((pre, cur) => (...args) => cur.call(null, pre.apply(null, args)))(args)
  }
}

const addStr2 = compose2(a,b,c)
const res2 = addStr2(111) // 111 c ;  b ;  a ; 

