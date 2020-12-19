// Build a container
// Create a default boxes of a specified number inside the container.
// Use your mouse to make a sketch over the boxes as it colors them
// Create a reset button for the game
// When user clicks on the button, clear the colored boxes
// Ask user to enter the number of boxes to create dynamically
// If the number is greater than 100, ask user to enter a lesser number
// Display selected boxes
// Move over the boxes to make a sketch as it colors the board
// Make your desired sketch.




// const container = document.querySelector('.container');

// function createGrid(rows, cols) {
//     container.style.setProperty('--grid-rows', rows);
//     container.style.setProperty('--grid-cols', cols);
//     for (let i = 0; i < (rows * cols); i++){
//         let cell = document.createElement('div');
//         cell.style.width = rows + 'px';
//         cell.style.height = cols + 'px';
//         container.appendChild(cell).className = 'grid-cells';
//     }
// }

// createGrid(8, 8);

// const gridCells = document.querySelectorAll('.grid-cells');

// const button = document.querySelector('#button');

// button.addEventListener('click', () => {
//     let gridNum = parseInt(prompt('Enter your grid length', 'Type a number'));
//     if (/^[0-9.,]+$/.test(gridNum) && gridNum > 1 && gridNum <= 100) {
//         createGrid(gridNum, gridNum);
//     } else {
//         alert('Enter a length of 1 and less than 100');
//     }
// });

// gridCells.forEach(cells => {
//     cells.addEventListener('mouseover', () => cells.style.backgroundColor = 'red');
// });

