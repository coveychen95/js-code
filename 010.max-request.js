// there is a url request list, and limit max request length

const urlList = [
  'https://a.com/1', 'https://a.com/2', 'https://a.com/3', 'https://a.com/4', 'https://a.com/5',
  'https://a.com/6', 'https://a.com/7', 'https://a.com/8', 'https://a.com/9', 'https://a.com/10',
]

maxRequest(urlList, 3).then(res => {
  console.log('maxRequest res: ', res);
})

function maxRequest(list, limit) {
  const result = []
  let count = 0
  let start = 0
  return new Promise ((resolve, reject) => {
    // initial add max length request
    while(start < limit) {
      addTask()
      start++
    }
    function addTask() {
      request(list[count]).then(res => {
        console.log('res: ', res);
        result.push(res)
        if (result.length === list.length) {
          resolve(result)
        }
        if (count < list.length) {
          // after doing one then add one
          addTask()
        }
      })
      count++
    }
  })
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
    }, random(5, 20) * 100)
  })
}

function random(start, end) {
  return Math.floor(Math.random(0, 1) * (end - start + 1) + start)
}