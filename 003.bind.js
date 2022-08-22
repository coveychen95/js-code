// bind call apply 方法作用一致，都是改变 this 指向的 不同的是 call apply 立即执行,而 bind 返回改变 this 指向后的新函数 
// bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。


var bob = {
  name: 'bob'
}

var susie = {
  name: 'susie',
  say(p1, p2) {
    console.log(`my name is ${this.name}。 ${p1} ${p2}`)
  }
}


Function.prototype.myBind = function (context) {
  const ctx = context || window
  const fn = Symbol('fn')
  ctx[fn] = this
  const args = [].slice.call(arguments, 1)
  return function() {
    ctx[fn](ctx, ...args)
  }
}

var fun = susie.say.bind(bob, 'lue lue lue', '...')
fun() // my name is bob。 lue lue lue ...