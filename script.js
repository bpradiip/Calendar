let monthContainer = document.querySelector('.month')
let dayContainer = document.querySelector('.day')
let dateContainer = document.querySelector('.date')
let yearContainer = document.querySelector('.year')


let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


let date = new Date()

monthContainer.innerHTML = monthName[date.getMonth()]
dayContainer.innerHTML = dayName[date.getDay()]
dateContainer.innerHTML = date.getDate()
yearContainer.innerHTML = date.getFullYear()


