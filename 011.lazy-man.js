// new Piggy().eat('breakfust').sleep(3).eat('luanch').sleep(5).eat('dinner')
// log('breakfust')
// timeout 3s 
// log('launch')
// timeout 5 s
// log('dinner')


class Piggy {
  tasks = []
  constructor() {
    // after tasks setted start one
    setTimeout(() => {
      this.next()
    })
  }

  eat(meal) {
    const task  = () => {
      return new Promise((resolve) => {
        console.log(meal)
        resolve()
      })
    }
    this.tasks.push(task)
    return this
  }

  sleep(time) {
    const task  = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, time * 1000)
      })
      
    }
    this.tasks.push(task)
    return this
  }

  next() {
    const task = this.tasks.shift()
    task && task().then(() => {
      this.next()
    })
  }
}

new Piggy().eat('breakfust').sleep(3).eat('luanch').sleep(5).eat('dinner')