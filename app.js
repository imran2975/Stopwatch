// indicators
let hour = document.querySelector('.h')
let minute = document.querySelector('.m')
let second = document.querySelector('.s')

//controls
const startBtn = document.querySelector('.start-btn')
const stopBtn = document.querySelector('.stop-btn')
const resetBtn = document.querySelector('.reset-btn')

const stopWatch = new Date(0, 0, 0, 0, 0, 0, 0)
let hours = 0
let minutes = 0
let seconds = 0

let intervalId
let isRunning = false

startBtn.addEventListener('click', () => {
  if (!isRunning) {
    intervalId = setInterval(() => {
      seconds += 1
      if (seconds >= 60) {
        seconds = 0
        minutes += 1
      }
      if (minutes >= 60) {
        minutes = 0
        hours += 1
      }
      stopWatch.setHours(hours, minutes, seconds)

      if (seconds < 10) {
        second.textContent = `0${stopWatch.getSeconds()}`
      } else {
        second.textContent = stopWatch.getSeconds()
      }

      if (minutes < 10) {
        minute.textContent = `0${stopWatch.getMinutes()}`
      } else {
        minute.textContent = stopWatch.getMinutes()
      }

      if (hours < 10) {
        hour.textContent = `0${stopWatch.getHours()}`
      } else {
        hour.textContent = stopWatch.getHours()
      }
    }, 1)
    
    isRunning = true
    resetBtn.style.display = 'none'
  }
})

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId)
  isRunning = false
  resetBtn.style.display = 'block'
})

resetBtn.addEventListener('click', ()=>{
    clearInterval(intervalId)
    isRunning = false
    hours = 0
    minutes = 0
    seconds = 0
    hour.textContent = '00'
    minute.textContent = '00'
    second.textContent = '00'
    resetBtn.style.display = 'none'
})