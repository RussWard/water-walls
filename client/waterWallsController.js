class WaterWalls {
  constructor() {
    this.walls = [];
    this.largestWell;
  }

  clearInput() {
    document.getElementById('form-input').value = '';
  }

  renderOneWall(height, id) {
    //set a wall node
    let parent = document.createElement('div');
    parent.setAttribute('class', 'wall');
    parent.setAttribute('id', `wall${id}`);
    for (let i = 0; i < height; i++) {
      let child = document.createElement('div');
      child.setAttribute('class', 'block');
      parent.appendChild(child);
    }
    return parent;
    //add a wall class 
    //add an id 
    //set a count to height and decrement in a loop
      //add a "block" to the wall
    //return wall
  }
 
  renderWalls() {
    let grid = document.createElement('div');
    grid.setAttribute('class', 'grid-container');
    this.walls.forEach((wall, index) => {
      let node = this.renderOneWall(wall, index);
      grid.appendChild(node);
    })
    document.getElementById('walls-display').appendChild(grid);
  }

  submit(string) {
    let walls = string.split(',');
    walls = walls.map(string => parseInt(string));
    let body = { walls };
    this.walls = walls;

    fetch('/findLargestWell', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
    .then(response => response.json())
    .then(data => {
      this.largestWell = data;
    })
    .then(() => {
      this.clearInput();
      this.renderWalls();
    })
    .catch(err => { console.log(err) })
  }
}

const waterWalls = new WaterWalls;