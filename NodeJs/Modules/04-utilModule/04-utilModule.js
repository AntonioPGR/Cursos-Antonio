console.clear();

const { randomInt } = require('crypto');
const util = require('util');

// const today = new Date();
// const randomNumber = randomInt(0, 10);
// console.log(util.types.isDate(today));
// console.log(util.types.isDate(randomNumber));


const trails = require('./trails.js');

// Simulate database call to search trails module for specified trail
const getTrailDistance = (trail, callback) => {
  return setTimeout(() => {
     console.log(callback)
    if (trails.hasOwnProperty(trail)) {    
      const foundTrail = trails[trail];    
      callback(null, foundTrail)
    } else {
      callback(new Error('Trail not found!'))
    }
  }, 1000);
}

// Promisfy below!
const getTrailDistancePromise = util.promisify(getTrailDistance);

getTrailDistancePromise('North Country')
  .then((foundTrail) => {      
    const nickname = foundTrail.nickname;
    const mi = foundTrail.miles; 
    console.log(`The ${nickname} is ${mi} miles long!`);
  })
  .catch((error) => {
    console.log('Trail not found!', error);
  })

