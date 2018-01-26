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

const isWell = (remainingWalls) => {
  // if the first wall is shorter than any of the rest of the remaining walls
    //return true;
  //return false; 
}

const findEnd = (current, remainingWalls) => {
  //declare endIndex variable
  //for loop on remainingWalls
    //if remainingWalls[i] is greater than or equal to remainingWalls[endIndex]
      // endIndex = i;
    //if remainingWalls[endIndex] >= current
      //return endIndex + 1;
  //return endIndex + 1;
}


const waterWalls = (wallsArray) => {
  //set a largestWell variable
  //set a current pointer to 0
  //while wellsArray[current + 1]
    //if wallsArray[current] > wallsArray[current + 1]
      //check if it's a valid well
        //find the wells end
        //find the wells height
        //find the wells capacity
        //create a currentWell object
        //if there is no largest well or if the currentWell.water > largestWell.water
          //set largestWell to currentWell
        //move current pointer to the end of the current well
      //otherwise, increment current
    //otherwise, increment current
  //if no largestWell has been set, return string
  //otherwise return largestWell in array form 
}


Transormations:

walls = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2],

1. current = 0, largestWell = undfined, wallsArray[current + 1] = 3 so we enter the while loop.
2. wallsArray[current] is greater than wallsArray[current + 1] so we enter the if block
3. isWell(wallsArray[3, 7, 2, 6, 4, 5, 9, 1, 2]) is true so we enter the next if block
4. end = findEnd(5, [3, 7, 2, 6, 4, 5, 9, 1, 2]) => 2
5. wellHeight = min of 5, 7 => 5
6. currentWell = {
  start: current + 1, => 1
  end: current + 1 + end, => 3
  water: calculateCapacity(5, [3]) => 2
}
7. largestWell = undefined so largestWell = currentWell
8. current = current + end => 0 + 2 = 2
9. current = 2, largestWell = {start:1, end:3, water:2} wallsArray[current + 1] = 2 so back into the while loop
10. 
        


 
//