// compose 函数
// 1. 函数式编程中 如果 涉及函数多层调用
// 如 res = a(b(c(d(e(num))))) 返回计算结果 代码看起来就会很难看 可读性大大降低
// compose 的目的就是把函数的嵌套执行解构为顺序执行 fn = compose(a,b,c,d,e) ; res = fn(num)