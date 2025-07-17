let container = document.querySelector('.container')
const containerStyle = window.getComputedStyle(container)
const resetButton = document.querySelector('.reset')
const applyButton = document.querySelector('.apply')
const input = document.querySelector('input')

function formGrid (size) {
    for (i = 0; i < size*size; i++) {
        const grid = document.createElement('div')
        grid.classList.add("grid")
        container.appendChild(grid)
        grid.style.height = (parseInt(containerStyle.getPropertyValue("height")) / size) + "px"
        grid.style.width = (parseInt(containerStyle.getPropertyValue("width")) / size) + "px"
        grid.style.border = "1px solid gray"
        grid.style.boxSizing = "border-box"
    }

}

formGrid(16)

let gridSquare = document.querySelectorAll(".grid")
gridSquare.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = "black"
    })
})

resetButton.addEventListener("click", () => {
    let gridSquare = document.querySelectorAll(".grid")
    gridSquare.forEach((grid) => {
        grid.style.backgroundColor = "white"
    })
})

applyButton.addEventListener("click", () => {
    container.innerHTML = ''
    formGrid(parseInt(input.value))

    let gridSquare = document.querySelectorAll(".grid")
        gridSquare.forEach((grid) => {
            grid.addEventListener("mouseover", () => {
                grid.style.backgroundColor = "black"
    })
})
})