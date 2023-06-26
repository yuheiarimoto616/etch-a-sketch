const DIMENSION = 16;
let container = document.querySelector('.container');

for (let i = 0; i < DIMENSION; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < DIMENSION; j++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', color);
        row.appendChild(cell);
    }
    container.appendChild(row);
}

function color(e) {
    e.target.classList.add('colored');
}