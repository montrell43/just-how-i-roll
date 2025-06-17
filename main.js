/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/
const d6Image = document.querySelector('#d6-roll');
d6Image.src = 'images/start/d6.png';



//const firstName ="Taurus";
//const lastName = 'Merriweather'
//console.log(`${firstName} ${lastName} is here`)

// click listener
// finding a random number
/*******************
 * EVENT LISTENERS *
 *******************/
d6Image.addEventListener('click', function() {
  const random = getRandomNumber(6)
  random.push(roll)
d6Image.src = `images/d6/${roll}.png`
    console.log(roll)
})


// clear out data from arr
// reset the images
/******************
 * RESET FUNCTION *
 ******************/



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
