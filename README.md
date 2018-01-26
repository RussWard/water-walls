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
  //if wellsArray[current] > wellsArray[1]
    //check if it's a well
      //if so, find it's end
      //calculate it's water capacity
      //if it's capacity is greater than the largestWell, replace largestWell
  //return largestWell      
}

# 
//