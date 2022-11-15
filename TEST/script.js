const span = document.querySelectorAll('span')
const bgs = ['red', 'blue', 'green', 'white', 'yellow', 'qua']

setInterval(() => {
    span.forEach((e) => {
        let color = bgs[Math.floor(Math.random() * bgs.length)]
        e.style.border = `5px solid ${color}`
    })
}, 200)
