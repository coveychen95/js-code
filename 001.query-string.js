// 实现 url 参数 与 对象相互转换

function obj2str(obj) {
  return Object.entries(obj).map(v => v.join('=')).join('&')
}

obj2str({ a: '122', d: 'werwe' }) // a=122&d=werwe

function str2obj(str) {
  return Object.fromEntries(str.split('&').map(col => col.split('=')))
}

str2obj('a=122&d=werwe'); // { a: '122', d: 'werwe' }