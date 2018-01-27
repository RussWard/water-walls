class WaterWalls {
  constructor() {
    this.walls = [];
  }
 
  renderWalls() {
    console.log(this.walls);
  }

  submit(string) {
    let walls = string.split(',');
    let body = { walls };

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
      this.walls = data;
    })
    .then(() => {
      this.renderWalls();
    })
    .catch(err => { console.log(err) })
  }
}

const waterWalls = new WaterWalls;