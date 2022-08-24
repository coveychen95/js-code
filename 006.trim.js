const str = '   s lfdksf    '
function trim (str) {
  const isSpace = (s) => s === ' ' || s === '\t' || s === '\n'
  let l = 0
  let r = str.length -1
  while(isSpace(str[l])) {
    l++
  }
  while(isSpace(str[r])) {
    r--
  }
  return str.substring(l, r +1)
}
const res1 = trim(str)
console.log('res1: ', res1); // s lfdksf

function trim2 (str) {
  return str.replace(/^[\s]+|[\s]$/, '')
}
const res2 = trim2(str)
console.log('res2: ', res2); // s lfdksf