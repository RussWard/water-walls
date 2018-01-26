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

    fetch('/createWaterWalls', {
      method: 'POST',
      mode: 'cors',
      body: body,
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
  }
}

const waterWalls = new WaterWalls;