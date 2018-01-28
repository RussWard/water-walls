const views = require('./views.js');

class WaterWalls {
  constructor() {
    this.walls = [];
    this.largestWell;
    this.submit = this.submit.bind(this);
  }

  submit() {
    let string = document.getElementById('form-field').value;
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
      views.clearInput();
      views.renderWells(this.walls);
    })
    .catch(err => { console.log(err) })
  }
}

module.exports =  { WaterWalls };