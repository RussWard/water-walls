const clearInput = () => {
  document.getElementById('form-field').value = '';
}

const createWall = (height, id) => {
  let wall = document.createElement('div');
  wall.setAttribute('class', 'wall');
  wall.setAttribute('id', `wall${id}`);

  for (let i = 0; i < height; i++) {
    let block = document.createElement('div');
    block.setAttribute('class', 'block');
    wall.appendChild(block);
  }
  return wall;
}

const createGrid = (walls) => {
  let grid = document.createElement('div');
  grid.setAttribute('class', 'grid-container');
  let height = Math.max(...walls) + 1;
  let width = walls.length + 1;
  grid.setAttribute('style', `grid-template: repeat(${height},1fr)/repeat(${width}, 1fr);`);
  let scale = document.createElement('div');
  for (let i = height; i > 0; i--) {
    let scaleBlock = document.createElement('div');
    scaleBlock.setAttribute('class', 'scale-block');
    scaleBlock.innerHTML = i;
    scale.appendChild(scaleBlock);
  }
  grid.appendChild(scale);
  walls.forEach((wall, index) => {
    let currentWall = createWall(wall, index);
    grid.appendChild(currentWall);
  })
  return grid;
}

const renderWells = (walls) => {
  let grid = createGrid(walls);
  let target = document.getElementById('wells-display');
  target.appendChild(grid);
}

module.exports = {
  clearInput,
  createWall,
  createGrid,
  renderWells
};