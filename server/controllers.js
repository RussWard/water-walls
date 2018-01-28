const scripts = require('../scripts');

const findLargestWell = (req, res) => {
  let walls = req.body.walls;
  let response = scripts.findLargestWell(walls);
  res.status(200);
  res.send(JSON.stringify(response));
};

const makeWells = (req, res) => {
  let walls = req.body.walls;
  let largestWell = scripts.findLargestWell(walls);
  let response = scripts.addWater(walls, largestWell);
  res.status(200);
  res.send(JSON.stringify(response));
}

module.exports = {
  makeWells,
  findLargestWell
};