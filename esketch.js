function color(e) {
    e.target.classList.add('colored');
}

function renderGrid() {
    let size = 512 / DIMENSION;

    for (let i = 0; i < DIMENSION; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < DIMENSION; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('mouseover', color);
            cell.style.cssText = `width: ${size}px; height: ${size}px;`;
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

function createGrid(e) {
    container.innerHTML = '';
    DIMENSION = Math.min(Number.parseInt(prompt("Give me a single integer n to create a n x n grid (max 100)")), 100);
    renderGrid();
}


let DIMENSION = 16;

let btn = document.querySelector('button');
btn.addEventListener('click', createGrid);

let container = document.querySelector('.container');

renderGrid();