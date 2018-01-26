# input: 
### an array of values representing the heights of walls
 example => const walls = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];

# Output: 
a three value array representing the 1 indexed positions of the enclosing walls and the volume of water for the largest well

 example => const expected = [3, 8, 11] meaning that the largest well was between the walls at index 2 and index 7 and between them are 11 units of water.

# Strategy: 
build a helper to calculate the water in a given well.  itterate through the array of walls to find the wells.  calculate the largest well and return it's corresponding values.

const calculateCapacity = (height, columns) => {
  //declare a water variable set to 0
  //itterate through the columns
    //add height - column to the water count
  //return water;
}

const isWell = (current, remainingWalls) => {
  // if the max of the remaining walls is greater than or equal to current
    //return true;
  //return false; 
}

const findEnd = (current, remainingWalls) => {
  //for loop on remainingWalls
    //if remainingWalls[i] is greater than or equal to current
      // return i + 1;
}


const waterWalls = (wallsArray) => {
  //set a largestWell variable
  //set a current pointer to 0
  //while wellsArray[current] > wellsArray[current + 1]
    //check if it's a well
      //if so, find it's end
      //calculate it's water capacity
      //if it's capacity is greater than the largestWell, replace largestWell
      //update current to end of the well
    // otherwise, if there was no valid well, increment current
    //if current is greater than wellsArray.length - 2, return largestWell
  //while wellsArray[current] < wellsArray[current +1]
    //increment current
  //return largestWell      
}


Transormations:

walls = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2],

1. walls[0] > walls[1] === true
2. -> isWell(walls[0], walls.slice(1)) === true
3. --> findEnd(walls[0], walls.slice(1) === 2
4. --> calculateCapacity(5, [3]) === 2
5. --> no largestWell so largestWell = {start: 1, end: 3, water: 2}
6. current = 2
7. walls[2] = 7, walls[3] = 2, 7 > 3
8. -> isWell(walls[2], walls.slice(3)) === true
9. --> findEnd(walls[2], walls.slice(3)) === 5 
10. --> calculateCapacity(7, [2, 6, 4, 5]) === 11
11. --> largestWell.water === 2 and 11 > 2 so largestWell = currentWell
12. current = 2 + 5 => 7
13. walls[7] > walls[8]
12. -> isWell(walls[7], walls.slice(8)) === false
13. -> current = 8
14. 
        


 
//