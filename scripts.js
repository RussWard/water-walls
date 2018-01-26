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
  let largestWell;
  let current = 0;

  while (wallsArray[current] > wallsArray[current + 1]) {
    if (isWell(wallsArray[current], wallsArray.slice(current + 1))) {
      let end = findEnd(wallsArray[current], wallsArray.slice(current + 1));
      let currentWell = {
        start: current + 1,
        end: current + 1 + end,
        water: calculateCapacity(wallsArray[current], wallsArray.slice(current + 1, current + end))
      }
      if (!largestWell || currentWell.water > largestWell.water) {
        largestWell = currentWell;
      }
      current = current + end; 
    } else {
      current++;
    }
    if (current > wallsArray.length - 2) {
      if (largestWell) {
        return [largestWell.start, largestWell.end, largestWell.water]
      } else {
        return 'no wells found'
      }
    }
  }
  while (wallsArray[current] <= wallsArray[current + 1]) {
    current++;
  }
  if (largestWell) {
    return [largestWell.start, largestWell.end, largestWell.water]
  } else {
    return 'no wells found'
  }
}

module.exports = {
  calculateCapacity,
  isWell,
  findEnd,
  waterWalls
}