const WaterWalls = require('./controller').WaterWalls;
const waterWalls = new WaterWalls();

let target = document.getElementById('submit-button');
target.addEventListener('click', waterWalls.submit);