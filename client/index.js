const WaterWalls = require('./controller').WaterWalls;
//const views = require('./views');
const waterWalls = new WaterWalls();
let target = document.getElementById('submit-button');
target.addEventListener('click', waterWalls.submit);