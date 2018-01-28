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


const findLargestWell = (wallsArray) => {
  let largestWell;
  let current = 0;

  while (wallsArray[current + 1]) {
    if (wallsArray[current] > wallsArray[current + 1]) {
      if (isWell(wallsArray.slice(current + 1))) {
        let end = findEnd(wallsArray[current], wallsArray.slice(current + 1));
        let wellHeight = Math.min(wallsArray[current], wallsArray[current + end]);
        let capacity = calculateCapacity(wellHeight, wallsArray.slice(current + 1, current + end));
        let currentWell = {
          start: current + 1,
          end: current + 1 + end,
          water: capacity
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

const addWater = (walls, largestWell) => {
  let results = [];
  for (let i = 1; i < walls.length - 1; i++) {
    let col = {};
    col.wall = walls[i];
    if (i + 1 === largestWell[0] || i + 1 === largestWell[1]) {
      col.largest = true;
    }
    let tallestBefore = Math.max(...walls.slice(0, i));
    let tallestAfter = Math.max(...walls.slice(i + 1));
    if (walls[i] < tallestBefore && walls[i] < tallestAfter) {
      col.water = Math.min(tallestBefore, tallestAfter) - walls[i];
    } else {
      col.water = 0;
    }
    results.push(col);
  }
  let start = {
    wall: walls[0],
    water: 0,
  };
  if (largestWell[0] === 1) {
    start.largest = true;
  }
  results.unshift(start)
  let end = {
    wall: walls[walls.length - 1],
    water: 0,
  };
  if (largestWell[1] === walls.length) {
    end.largest = true;
  }
  results.push(end);
  return results; 
}

module.exports = {
  addWater,
  calculateCapacity,
  isWell,
  findEnd,
  findLargestWell
}