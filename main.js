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

function double() {
const dblOne = getRandomNumber(6);
const dblTwo = getRandomNumber(6)

return [dblOne, dblTwo]
}

/*******************
 * YOUR CODE BELOW *
 *******************/
const d6Image = document.querySelector('#d6-roll');
d6Image.src = 'images/start/d6.png';

const doubD6ImgOne = document.querySelector('#double-d6-roll-1');
const doubD6ImgTwo = document.querySelector('#double-d6-roll-2');
doubD6ImgOne.src = 'images/start/d6.png'
doubD6ImgTwo.src = 'images/start/d6.png'

const dTwelve = document.querySelector('#d12-roll');
dTwelve.src = 'images/start/d12.png'



//const firstName ="Taurus";
//const lastName = 'Merriweather'
//console.log(`${firstName} ${lastName} is here`)

// click listener
// finding a random number
/*******************
 * EVENT LISTENERS *
 *******************/
d6Image.addEventListener('click', function () {
  const roll = getRandomNumber(6)
  sixes.push(roll)
d6Image.src = `images/d6/${roll}.png`
    console.log(roll)
})

doubD6ImgOne.addEventListener('click', function () {
  // assigning the rollOne rollTwo to the double function which is calling the func to be used in the event listner which reassignsed it to num to be pushed mimcing first event listener
  const [rollOne, rollTwo] = double();
  const num = rollOne + rollTwo
  
  doubD6ImgOne.src = `images/d6/${rollOne}.png`
  doubD6ImgTwo.src = `images/d6/${rollTwo}.png`
  doubleSixes.push(num)
})

dTwelve.addEventListener('click', function () {
  const twelve = getRandomNumber(12)
  console.log(`d12: ${twelve}`)
  twelves.push(twelve)
  dTwelve.src = `images/numbers/${twelve}.png`
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
