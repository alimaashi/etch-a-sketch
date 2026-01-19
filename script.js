const numRows = 16;
const numCols = 16;
const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < numRows; i++) {
    const newRow = document.createElement("div");
    newRow.classList.add("grid-row-container");
    newRow.style.height = `${100/numRows}%`;

    for (let j = 0; j < numCols; j++) {
        const newGridCell = document.createElement("div");
        newGridCell.classList.add("grid-cell");
        newRow.appendChild(newGridCell);
    }
    gridContainer.appendChild(newRow);
}