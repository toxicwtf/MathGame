let awnser = document.querySelector('.awnser');
let chars = ['+', '-', '*']
let start = document.querySelector('.start')
let submit = document.querySelector('.submit')
let question = document.querySelector('.question')
let point = document.querySelector('.point')
let ShowPoint = 0;
question.innerHTML = `Lets play`

let randomeNum1 = 0;
let randomeNum2 = 0;
let randomeChar = 0;

start.addEventListener('click', () => {
    start.classList.add('hide')
    submit.classList.remove('hide')
    point.classList.remove('hide')
    randomeNum1 = Math.floor(Math.random() * 9)
    randomeNum2 = Math.floor(Math.random() * 9)
    randomeChar = Math.floor(Math.random() * 3)
    question.innerHTML = `what is ${randomeNum1} ${chars[randomeChar]} ${randomeNum2} ?`
    console.log(randomeChar);
})

submit.addEventListener('click', () => {
    if (randomeChar == '0') {
        if (awnser.value == randomeNum1 + randomeNum2) {
            ShowPoint = ShowPoint + 1
            point.innerHTML = `Point : ${ShowPoint}`
            randomeNum1 = Math.floor(Math.random() * 9)
            randomeNum2 = Math.floor(Math.random() * 9)
            randomeChar = Math.floor(Math.random() * 3)
            awnser.value = ''
            question.innerHTML = `what is ${randomeNum1} ${chars[randomeChar]} ${randomeNum2} ?`

        } else {
            ShowPoint = ShowPoint - 1
            awnser.value = ''
            point.innerHTML = `Point : ${ShowPoint}`

        }
    } else if (randomeChar == '1') {
        if (awnser.value == randomeNum1 - randomeNum2) {
            ShowPoint = ShowPoint + 1
            point.innerHTML = `Point : ${ShowPoint}`
            randomeNum1 = Math.floor(Math.random() * 9)
            randomeNum2 = Math.floor(Math.random() * 9)
            randomeChar = Math.floor(Math.random() * 3)
            question.innerHTML = `what is ${randomeNum1} ${chars[randomeChar]} ${randomeNum2} ?`
            awnser.value = ''
        } else {
            ShowPoint = ShowPoint - 1
            awnser.value = ''
            point.innerHTML = `Point : ${ShowPoint}`
        }
    } else if (randomeChar == '2') {
        if (awnser.value == randomeNum1 * randomeNum2) {
            ShowPoint = ShowPoint + 1
            point.innerHTML = `Point : ${ShowPoint}`
            randomeNum1 = Math.floor(Math.random() * 9)
            randomeNum2 = Math.floor(Math.random() * 9)
            randomeChar = Math.floor(Math.random() * 3)
            awnser.value = ''
            question.innerHTML = `what is ${randomeNum1} ${chars[randomeChar]} ${randomeNum2} ?`
        } else {
            ShowPoint = ShowPoint - 1
            awnser.value = ''
            point.innerHTML = `Point : ${ShowPoint}`
        }
    }

})