const container = document.querySelector(".container")
const on = document.querySelector('.on')
const off  = document.querySelector('.off')

let n = 597
for (let i = 0; i <= n; i++) {
    const square = document.createElement("div")
    square.setAttribute("class", "square")
    container.append(square)

    square.addEventListener("mouseover",() => setColor(square))
    square.addEventListener("mouseleave",() => removeItem(square))

    on.addEventListener("click",() =>{
        setColor(square)
        document.body.style.background = randomColor()
    })
    off.addEventListener("click",() => {
        removeItem(square)
        document.body.style.background = ""
    })
}

function setColor(item){
    let color = randomColor()
    item.style.background = color
    item.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    // item.style.transform = "scale(1.1)"
}



function randomColor(){
    let str = "abcdef1234567890"
let color = "#"
    for (let i = 0; i < 6; i++){
        const randomNumber  = Math.floor( Math.random() * str.length)
        color += str[randomNumber]
    }
    return color
}
randomColor()



function removeItem(item){
    item.style.background = "aqua"
    item.style.boxShadow = ""
    item.style.transform = ""
}
