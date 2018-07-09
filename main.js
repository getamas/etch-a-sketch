
// Base setup
let gridSize = document.getElementById('pixel-size-list');
let pixel = parseInt(gridSize.value);
let gridRatio = pixel * pixel;
const canvas = document.getElementById('canvas');

// Init Setup
document.addEventListener('DOMContentLoaded', () => {
  createGrid();
  draw();
});

// Create Grid Items
function createGrid() {
  for (var i = 1; i < gridRatio; i++) {
    var gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    canvas.appendChild(gridItem);
  }
}

// Draw on Canvas Event
function draw() {
  Array.from(document.querySelectorAll('.grid-item')).forEach(gridItem => {
    gridItem.addEventListener('mouseenter', () => {
      gridItem.classList.add('colored');
    });
  });
}

// Clear Grid
function clearGrid() {
  Array.from(document.querySelectorAll('.grid-item')).forEach(gridItem => {
    gridItem.remove();
  });
}

// Resize Grid
function resizeGrid(pixel) {
  gridRatio = pixel * pixel;

  clearGrid();
  createGrid();

  Array.from(document.querySelectorAll('.grid-item')).forEach(gridItem => {
    if (pixel === 16) {
      gridItem.style.width = "30px";
      gridItem.style.height = "30px";
    } else if (pixel === 64) {
      gridItem.style.width = "12px";
      gridItem.style.height = "12px";
    } else {
      gridItem.style.width = "5px";
      gridItem.style.height = "5px";  
    }
  });

  draw();
}

// Set Canvas Size
gridSize.addEventListener('change', () => {
  resizeGrid(parseInt(event.target.value));
});


// Clear Current Canvas
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', () => {
  resizeGrid(parseInt(gridSize.value));
});