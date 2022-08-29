// lazy function 惰性函数

// === 使用场景 ===
// 判断用户所处环境，判断一次即可确定，以后都不用再次判断了

// 1. 全局变量实现
let env = getEnv()
function getEnv(env = '') {
  if (env.match(/wechat/)) return 'wechat'
  if (env.match(/qq/)) return 'qq'
  return 'browser'
}

// 全局变量存在的问题
// 1. 污染全局变量
// 2. 只要调用一次函数都会重新判断


// 2. 函数重写
function getEnv2(env = '') {
  if (env.match(/wechat/)) {
    getEnv2 = function() {
      return 'wechat'
    }
  }else if (env.match(/qq/)) {
    getEnv2 = function() {
      return 'qq'
    }
  } else {
    getEnv2 = function() {
      return 'browser'
    }
  }
  return getEnv2(env)
}

let env1 = getEnv2('')
console.log('env1: ', env1); // env1:  browser
let env2 = getEnv2('wechat')
console.log('env2: ', env2); // env2:  browser
let env3 = getEnv2('qq')
console.log('env3: ', env3); // env3:  browser
