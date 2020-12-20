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
const gridCells = document.querySelectorAll('.grid-cells');

function createGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-cells';
    }
}


// function resetGrid() {
//         // createGrid(5, 5);
//         document.querySelectorAll('.grid-cells').forEach(item => item.style = '');
// };

// button.addEventListener('click', resetGrid);
button.addEventListener('click', () => {
    let gridNum = parseInt(prompt('Enter your grid size', 'Type a number'));
    if (/^[0-9.,]+$/.test(gridNum) && gridNum > 1 && gridNum <= 50) {
        createGrid(gridNum, gridNum);
        // resetGrid();
    } else {
        alert('Enter a grid size between 1 and  50');
    }
});

gridCells.forEach(cells => {
    cells.addEventListener('mouseover', () => cells.style.backgroundColor = 'red');
});


function gridDisplay() {
    createGrid(5, 5);
    // createGrid(gridNum, gridNum);
}

gridDisplay();

