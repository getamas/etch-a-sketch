
const gridSize = document.getElementById('pixel-size-list');
let gridX = gridSize.value;
let gridY = gridSize.value;
let canvas = document.getElementById('canvas');

// Create Grid
function createGrid(x, y) {
  for (let i = 1; i <= x*y; i++) {
    let div = document.createElement('div');
    div.className = 'grid-item';
    canvas.appendChild(div);
  }
}

// Print to Canvas
function printCanvas(event) {
  if (event.target.classList.contains('grid-item')) {
    event.target.classList.add('colored');
  }
}

// Clear Grid
function clearGrid(elem) {
  let pixelSize = Number(elem.value);
  let gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(gridItem => {
     gridItem.remove();
  });

  createGrid(pixelSize, pixelSize);
}

// Resize Grid
function resizeGrid(elem) {
  let pixelSize = Number(elem.value);
  let gridItems = document.querySelectorAll('.grid-item');

  if (pixelSize === 16) {
    gridItems.forEach(gridItem => {
      gridItem.style.width = '30px';
      gridItem.style.height = '30px';
    });
  }

  if (pixelSize === 64) {
    gridItems.forEach(gridItem => {
      gridItem.style.width = '15px';
      gridItem.style.height = '15px';
    });
  }

  if (pixelSize === 100) {
    gridItems.forEach(gridItem => {
      gridItem.style.width = '7px';
      gridItem.style.height = '7px';
    });
  }
}

// Create Grid default on page load
createGrid(gridX, gridY);

// Event listeners
canvas.addEventListener('mousemove', printCanvas);
document.getElementById('clear').addEventListener('click', () => {
  clearGrid(gridSize);
  resizeGrid(gridSize);
});
gridSize.addEventListener('change', () => {
  clearGrid(event.target);
  resizeGrid(event.target);
});
