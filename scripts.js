const calculateCapacity = (height, walls) => {
  let water = 0;
  walls.forEach(wall => {
    water += (height - wall);
  })
  return water;
}

const isWell = (current, remainingWalls) => {
  if (Math.max(...remainingWalls) >= current) {
    return true;
  }
  return false;
}

const findEnd = (current, remainingWalls) => {
  for (let i = 0; i < remainingWalls.length; i++) {
    if (remainingWalls[i] >= current) {
      return i + 1;
    }
  }
}


const waterWalls = (wallsArray) => {
  //set a largestWell variable
  let largestWell;
  //set a current pointer to 0
  let current = 0;
  //if wallsArray[current] > wallsArray[1]
  while (wallsArray[current] > wallsArray[current + 1]) {
    if (isWell(wallsArray[current], wallsArray.slice(current + 1))) {
      let end = findEnd(wallsArray[current], wallsArray.slice(current + 1));
      let currentWell = {
        start: current + 1,
        end: current + 1 + end,
        water: calculateCapacity(wallsArray[current], wallsArray.slice(current + 1, current + this.end + 1))
      }
      if (!largestWell || currentWell.water > largestWell.water) {
        currentWell = largestWell;
      }
    }
    if (current > wallsArray.length - 2) {
      
    }
  }    
}

module.exports = {
  calculateCapacity,
  isWell,
  findEnd,
  waterWalls
}