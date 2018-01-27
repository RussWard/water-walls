const scripts = require('../scripts');

const findLargestWell = (req, res) => {
  let walls = req.body.walls;
  let response = scripts.waterWalls(walls);
  res.status(200);
  res.send(JSON.stringify(response));
};

module.exports = {
  findLargestWell
};