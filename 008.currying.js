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

// 3. what is currying
// 在计算机科学中，柯里化（英语：Currying）是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术


// 4. 实现 currying 函数

// 基础版本 curry
var curry = function (fn) {
  var args = [].slice.call(arguments, 1);
  return function() {
      var newArgs = args.concat([].slice.call(arguments));
      return fn.apply(this, newArgs);
  };
};

const checkEmail2 = curry(checkReg, /^\w+@\w+(\.\w+)+$/)
checkEmail2('bob@qq.com')
checkEmail2('susie@qq.com')
const checkMobile2 = curry(checkReg, /^1[3456789]\d{9}$/)
checkMobile2('15677778888')
checkMobile2('15688889999')

// 5. 优化版本

function curry2(fn) {
  const length = fn.length;
  const curryFn = (args) => (arg) => {
      const curryArgs = args.concat(arg);
      if (curryArgs.length === length) {
          return fn(...curryArgs);
      }
      return curryFn(curryArgs);
  }
  return curryFn([]);
}

const curry3 = fn => {
  const judge = (...args) =>
        args.length === fn.length
            ? fn(...args)
            : (arg) => judge(...args, arg)
  return judge
}


