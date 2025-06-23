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
  // calls helper func to rolling the dice
const dblOne = getRandomNumber(6);
const dblTwo = getRandomNumber(6)

// for(let i = 0; i < doubleSixes.length; i++)
//   if(dblOne === dblTwo){

// returns the dice rolled as an array
    return [dblOne,  dblTwo]
  // }

}

// the average or the mean is found by adding all the num together and dividing by the length quanity of num [11, 23, 47] 11 + 23 + 47 = 77 / 3

function mean(arr) {
  // using helper func to sort from small to large if arr = [5, 2, 8] it sorts it in proper form arr now = [2, 5, 8]
const sort = sortByNumber(arr)
// if arr is empty length is 0 and returns 0 to not divid by 0 later
if(arr.length === 0) return 0
// initialized to 0 to store a sum of numbers
let result = 0
// loops through numbers in sort arr to add to result if sort = [5, 2 , 8] result = 0 + 2 + 5 + 8 = 15 that adds all three numb
for(let num of sort) {
result += num
}
// returns result and divides total sum by numb in the arr to get the mean if result = 12 and sort.length = 4 the return is 12 / 4 = 3
return result / sort.length
}

/*******************
 * YOUR CODE BELOW *
 *******************/
// selecting elements by its ID to be able to change it's img or anyother contents later
const d6Image = document.querySelector('#d6-roll');
d6Image.src = 'images/start/d6.png';

const doubD6ImgOne = document.querySelector('#double-d6-roll-1');
const doubD6ImgTwo = document.querySelector('#double-d6-roll-2');
doubD6ImgOne.src = 'images/start/d6.png'
doubD6ImgTwo.src = 'images/start/d6.png'

const dTwelve = document.querySelector('#d12-roll');
dTwelve.src = 'images/start/d12.jpeg';

const dTwenty = document.querySelector('#d20-roll');
dTwenty.src = 'images/start/d20.jpg'

const reset = document.querySelector('#reset-button')
// insert the calculation to the mode element
// insert the calculation to the mean element
// insert the calculation to the median element
const d6ModeDisplay = document.querySelector('#d6-rolls-mode');
const d6MeanDisplay = document.querySelector('#d6-rolls-mean');
const d6MedianDisplay = document.querySelector('#d6-rolls-median');

const doubleD6ModeDisplay = document.querySelector('#double-d6-rolls-mode');
const doubleD6MeanDisplay = document.querySelector('#double-d6-rolls-mean');
const doubleD6MedianDisplay = document.querySelector('#double-d6-rolls-median');

const d12ModeDisplay = document.querySelector('#d12-rolls-mode');
const d12MeanDisplay = document.querySelector('#d12-rolls-mean');
const d12MedianDisplay = document.querySelector('#d12-rolls-median');

const d20ModeDisplay = document.querySelector('#d20-rolls-mode');
const d20MeanDisplay = document.querySelector('#d20-rolls-mean');
const d20MedianDisplay = document.querySelector('#d20-rolls-median');
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
    console.log(roll);

    d6ModeDisplay.textContent = mode(sixes)
    d6MeanDisplay.textContent = mean(sixes)
    d6MedianDisplay.textContent = median(sixes)
})

doubD6ImgOne.addEventListener('click', function () {
  // assigning the rollOne rollTwo to the double function which is calling the func to be used in the event listner which reassignsed it to num to be pushed mimcing first event listener
  const [rollOne, rollTwo] = double();
  const num = rollOne + rollTwo
  doubleSixes.push(num)
  doubD6ImgOne.src = `images/d6/${rollOne}.png`
  doubD6ImgTwo.src = `images/d6/${rollTwo}.png`
  

  doubleD6ModeDisplay.textContent = mode(doubleSixes)
  doubleD6MeanDisplay.textContent = mean(doubleSixes)
  doubleD6MedianDisplay.textContent = median(doubleSixes)
})

dTwelve.addEventListener('click', function () {
  const twelve = getRandomNumber(12)
  //console.log(`d12: ${twelve}`)
  twelves.push(twelve)
  dTwelve.src = `images/numbers/${twelve}.png`

  d12ModeDisplay.textContent = mode(twelves)
  d12MeanDisplay.textContent = mean(twelves)
  d12MedianDisplay.textContent = median(twelves)
})

dTwenty.addEventListener('click', function () {
  const twenty = getRandomNumber(20)
  //console.log(`d12: ${twelve}`)
  twenties.push(twenty)
  dTwenty.src = `images/numbers/${twenty}.png`
  d20ModeDisplay.textContent = mode(twenties)
  d20MeanDisplay.textContent = mean(twenties)
  d20MedianDisplay.textContent = median(twenties)
})


// meanDsix.addEventListener('click', function() {
//   meanDsix.push(sixes + 1)
// })
//meanDsix();
// clear out data from arr
// reset the images
/******************
 * RESET FUNCTION *
 ******************/
function resetAll() {
     const d6Image = document.querySelector('#d6-roll');
d6Image.src = 'images/start/d6.png';

const doubD6ImgOne = document.querySelector('#double-d6-roll-1');
const doubD6ImgTwo = document.querySelector('#double-d6-roll-2');
doubD6ImgOne.src = 'images/start/d6.png'
doubD6ImgTwo.src = 'images/start/d6.png'

const dTwelve = document.querySelector('#d12-roll');
dTwelve.src = 'images/start/d12.jpeg'

const dTwenty = document.querySelector('#d20-roll');
dTwenty.src = 'images/start/d20.jpg'

sixes.length = 0;
doubleSixes.length = 0;
twelves.length = 0;
twenties.length = 0;

d6ModeDisplay.textContent = ""
d6MeanDisplay.textContent = ""
d6MedianDisplay.textContent = ""

doubleD6ModeDisplay.textContent = ""
doubleD6MeanDisplay.textContent = ""
doubleD6MedianDisplay.textContent = ""

d12ModeDisplay.textContent = ""
d12MeanDisplay.textContent = ""
d12MedianDisplay.textContent = ""

d20MedianDisplay.textContent = ""
d20ModeDisplay.textContent = ""
d20MeanDisplay.textContent = ""
}

const button = document.querySelector('#reset-button')
button.addEventListener('click', resetAll)
//reset.addEventListener('click', ["#reset-button"])

/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/


/****************
 * MATH SECTION *
 ****************/

// median is middle num if even will take the two middle num
// [11, 23, 47] = 23
// when the length is 3 the middle is 1 divide length by two minus .5
// when the length is 5 the middle is 2
// when the length is 7 the middle is 3
// when the length is 4 the middle is 1,2
// when the length is 6 the middle is 2,3
// when the length is 8 the middle is 3,4

function median() {
  const sort =sortByNumber(arr);

  if(sort.length % 2 === 1){
    return sort.length[Math.floor(sort.length / 2)]
  }
}


// Mode is the most frequent num
// [1,1,2,2,2,3,4,5] => 2 cause it is more 2 than any other num
// num = 5 after iteration becomes nash = {5: 1} if 5 comes up again in second iteration it becomes nash = {5: 2}


function mode(arr) {
  // stores the obj of nash count for a later use when called
  const nash = {}
  // will iterate through the num of arr
  for(let num of arr) {
    // if undefined add 1 to it
   if(nash[num] === undefined) {
    // making a property of nash key of num to the value of how many times a num appears
    nash[num] = 1
   } else {
    nash[num] ++
   }
  }
// holds the high value
let modesValue;  
// what is ran already once iteration starts
  let modes = 0;

  // loops the key num of nash for comparison
  for(let key in nash) {
    // look for biggest number
    // if a num appear more then the other it is the biggest num
    if(nash[key] > modes) {
      modes = nash[key];
      modesValue = Number(key);
    }
  }
  return modesValue;
}

