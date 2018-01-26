const calculateCapacity = (height, walls) => {
  let water = 0;
  walls.forEach(wall => {
    water += (height - wall);
  })
  return water;
}

const isWell = (remainingWalls) => {
  if (Math.max(...remainingWalls.slice(1)) > remainingWalls[0]) {
    return true;
  }
  return false;
}

const findEnd = (current, remainingWalls) => {
  let endIndex = 0

  for (let i = 1; i < remainingWalls.length; i++) {
    if (remainingWalls[i] > remainingWalls[endIndex]) {
      endIndex = i;
    }
    if (remainingWalls[endIndex] >= current) {
      return endIndex + 1;
    }
  }
  return endIndex + 1;
}


const waterWalls = (wallsArray) => {
  let largestWell;
  let current = 0;

  while (wallsArray[current + 1]) {
    if (wallsArray[current] > wallsArray[current + 1]) {
      if (isWell(wallsArray.slice(current + 1))) {
        let end = findEnd(wallsArray[current], wallsArray.slice(current + 1));
        let wellHeight = Math.min(wallsArray[current], wallsArray[current + end]);
        let currentWell = {
          start: current + 1,
          end: current + 1 + end,
          water: calculateCapacity(wellHeight, wallsArray.slice(current + 1, current + end))
        }
        if (!largestWell || currentWell.water > largestWell.water) {
          largestWell = currentWell;
        }
        current = current + end;
      } else {
        current++;
      }
    } else {
      current++;
    }
  }
  if (!largestWell) {
    return 'no wells found';
  } else {
    return [largestWell.start, largestWell.end, largestWell.water];
  }
}

module.exports = {
  calculateCapacity,
  isWell,
  findEnd,
  waterWalls
}