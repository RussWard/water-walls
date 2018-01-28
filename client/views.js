const clearInput = () => {
  document.getElementById('form-field').value = '';
}

const createColumn = (col, height, id) => {
  
  let column = document.createElement('div');
  column.setAttribute('class', 'wall');
  column.setAttribute('id', `wall-${id}`);
  let wall = col.wall;
  let water = col.water;
  let air = height - col.wall - col.water;

  while (height) {
    while (air) {
      let airBlock = document.createElement('div');
      airBlock.setAttribute('class', 'air block');
      column.appendChild(airBlock);
      air--;
      height--;
    }
    while (water) {
      let waterBlock = document.createElement('div');
      waterBlock.setAttribute('class', 'water block');
      column.appendChild(waterBlock);
      water--;
      height--;
    }
    while (wall) {
      let block = document.createElement('div');
      if (col.largest) {
        block.setAttribute('class', 'largest block')
      } else {
        block.setAttribute('class', 'block');
      }
      column.appendChild(block);
      wall--;
      height--;
    }
  }
  return column;
}

const createGrid = (walls) => {
  let grid = document.createElement('div');
  grid.setAttribute('class', 'grid-container');
  let wallHeights = walls.map(col => col.wall);
  let height = Math.max(...wallHeights) + 1;
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
    console.log(height)
    let currentWall = createColumn(wall, height, index);
    grid.appendChild(currentWall);
  })
  return grid;
}

const renderWells = (walls) => {
  let grid = createGrid(walls);
  let target = document.getElementById('wells-display');
  target.appendChild(grid);
}

const clearWells = () => {
  document.getElementById('wells-display').innerHTML = null;
}

module.exports = {
  clearWells,
  clearInput,
  createColumn,
  createGrid,
  renderWells
};