// Build a container
// Create a default boxes of a specified number inside the container.
// Use your mouse to make a sketch over the boxes as it colors them
// Create a reset button for the game
// When user clicks on the button, clear the colored boxes
// Ask user to enter the number of boxes to create dynamically
// If the number is greater than 50, ask user to enter a lesser number
// Display selected boxes
// Move over the boxes to make a sketch as it colors the board
// Make your desired sketch.

const container = document.querySelector('.container');
const button = document.querySelector('#button');

function createGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-cells';
    }
}

resetGrid = () => {
    // container.innerHTML = '';
    let gridCells = document.querySelectorAll('.grid-cells');
    gridCells.forEach(cell => {
        cell.remove();
    });
    addNewGrid();
}

addNewGrid = () => {
    let gridSize= parseInt(prompt('Enter your grid size', 'Type a number'));
    if (/^[0-9.,]+$/.test(gridSize) && gridSize> 1 && gridSize<= 50) {
        createGrid(gridSize, gridSize);
    } else {
        alert('Enter a grid size between 2 and  50');
        gridDisplay();
    }
    colorGrid();
}

colorGrid = () => {
    const gridCells = document.querySelectorAll('.grid-cells');
    gridCells.forEach(cell => {
        cell.addEventListener('mouseover', () => cell.classList.add('grid-color'));
    });
}

gridDisplay = () => {
    createGrid(5, 5);
    colorGrid();
}
button.addEventListener('click', resetGrid);

gridDisplay();

