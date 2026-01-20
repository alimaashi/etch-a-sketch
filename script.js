const gridContainer = document.querySelector(".grid-container");
const selectSizeButton = document.querySelector(".select-size-button");
const maxGridNum = 100;
const minGridNum = 1;
const defaultColor = "rgb(181, 181, 250)"

function createNewGrid(gridSize) {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    for (let i = 0; i < gridSize; i++) {
        const newRow = document.createElement("div");
        newRow.classList.add("grid-row-container");
        newRow.style.height = `${100/gridSize}%`;

        for (let j = 0; j < gridSize; j++) {
            const newGridCell = document.createElement("div");
            newGridCell.classList.add("grid-cell");
            newRow.appendChild(newGridCell);
        }
        gridContainer.appendChild(newRow);
    }
}

function generateRandomColor() {
    const rgbMaxThreshold = 256;
    return Math.floor(Math.random() * rgbMaxThreshold);
}

function selectGridSize() {
    let gridSize = prompt("Enter number of squares per side for the new grid.");
    if (Number.isInteger(parseInt(gridSize)) && (gridSize <= maxGridNum) && (gridSize >= minGridNum)) {
        return gridSize;
    }
    alert("The number of squares must be between 1 and 100!");
    return -1;
}

createNewGrid(16); // By default load a 16x16 grid

selectSizeButton.addEventListener("click", () => {
    gridSize = selectGridSize();

    if (gridSize != -1) {
        createNewGrid(gridSize);
    }
})

allCells = document.querySelectorAll(".grid-cell");
allCells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
        const backgroundColor = window.getComputedStyle(cell).getPropertyValue("background-color");
        if (backgroundColor === "rgb(188, 188, 255)") {
            cell.style.backgroundColor = `rgb(${generateRandomColor()}, ${generateRandomColor()}, ${generateRandomColor()})`;
        }
        const currentOpacity = Number(window.getComputedStyle(cell).getPropertyValue("opacity"));
        cell.style.opacity = currentOpacity + 0.1;
    })
})
