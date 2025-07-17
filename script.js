let container = document.querySelector('.container')
const containerStyle = window.getComputedStyle(container)

function formGrid (size) {
    for (i = 0; i < size*size; i++) {
        const grid = document.createElement('div')
        container.appendChild(grid)
        grid.style.height = (parseInt(containerStyle.getPropertyValue("height")) / size) + "px"
        grid.style.width = (parseInt(containerStyle.getPropertyValue("width")) / size) + "px"
        grid.style.border = "1px solid gray"
        grid.style.boxSizing = "border-box"
    }
}

formGrid(16)