// 简介：mdn
// Function.prototype.call()
// call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。

// 介绍
// 一言以蔽之：call 就是用来改变 this 值的

// 例子
var bob = {
  name: 'bob'
}

var susie = {
  name: 'susie',
  say() {
    console.log(`my name is ${this.name}`)
  }
}

susie.say() // my name is susie
susie.say.call(bob) // my name is bob

// 作用
// 简单说 就是 call 的最大作用就是 借用其它对象的方法做自己的事情


// 实现思路
// 1. 新增一个函数
// 2. 改变函数指向
// 3. 执行函数
// 4. 删除函数


Function.prototype.myCall = function (ctx) {
  // 
  ctx.fn = this
  ctx.fn()
  delete ctx.fn
}

susie.say.myCall(bob) // my name is bob
// 这里已基本实现 call 的功能




Function.prototype.myCall = function (context) {
  const ctx = context || window
  const fn = Symbol('fn')
  ctx[fn] = this
  const args = [...arguments].slice(1)
  ctx[fn](...args)
  delete ctx[fn]
}

var susie = {
  name: 'susie',
  say(o, t, s) {
    console.log(`my name is ${this.name}, ${o}, ${t}, ${s}`,)
  }
}

susie.say.myCall(bob, 1, 2, 3) // my name is bob, 1, 2, 3

