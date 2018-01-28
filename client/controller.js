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

    fetch('/makeWells', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
    .then(response => response.json())
    .then(data => {
      this.walls = data;
      views.clearInput();
      views.clearWells();
    })
    .then(() => {
      views.renderWells(this.walls);
    })
    .catch(err => { console.log(err) })
  }
}

module.exports =  { WaterWalls };