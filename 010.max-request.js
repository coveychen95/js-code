// there is a url request list, and limit max request length

const urlList = [
  'https://a.com/1', 'https://a.com/2', 'https://a.com/3', 'https://a.com/4', 'https://a.com/5',
  'https://a.com/6', 'https://a.com/7', 'https://a.com/8', 'https://a.com/9', 'https://a.com/10',
]
/**
 * limit request
 * @param {string[]} list - url list
 * @param {number} limit - limit count
 */
function limitRequest(list, limit) {
  const res = []
  const task = []

}


function request(url) {
  return wait().then(res => {
    return `loaded this: ${url}`
  })
}

function wait () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, random(5, 10) * 100)
  })
}

function random(start, end) {
  return Math.floor(Math.random(0, 1) * (end - start + 1) + start)
}