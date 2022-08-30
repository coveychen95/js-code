// currying 柯里化

// === 业务场景 ===
// 使用正则校验手机号 邮箱

// 1. 常规实现思路
// 正则校验
function checkReg(reg, str) {
  return reg.test(str)
}
// 邮箱
checkReg(/^\w+@\w+(\.\w+)+$/, 'bob@qq.com')
checkReg(/^\w+@\w+(\.\w+)+$/, 'susie@qq.com')
// 手机
checkReg(/^1[3456789]\d{9}$/, '15677778888')
checkReg(/^1[3456789]\d{9}$/, '15688889999')

// 这种方法缺点
// - 同一正则条件多次使用
// - 没有注释可能忘记函数作用


// 2. currying 柯里化思路实现
function checkEmail(str) {
  return checkReg(/^\w+@\w+(\.\w+)+$/, str)
}

function checkMobile(str) {
  return checkReg(/^1[3456789]\d{9}$/, str)
}
checkEmail('bob@qq.com')
checkEmail('susie@qq.com')

checkMobile('15677778888')
checkMobile('15688889999')

