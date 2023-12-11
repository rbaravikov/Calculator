const buttons = document.querySelectorAll("button")
let mem = document.querySelector(".previous-operand")
const displayCurr = document.querySelector(".current-operand")
mem.innerText = 0

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        switch(button.innerText){
            case "AC": displayCurr.innerText = "", mem.innerText = ""
            break
            case "DEL":if(displayCurr.innerText){
                displayCurr.innerText = displayCurr.innerText.slice(0, -1)
            }
            break
            case "=": mem.innerText = Number(displayCurr.innerText) + Number(mem.innerText), displayCurr.innerText = ""
            break
            default: displayCurr.innerText += button.innerText
        }
    })
})