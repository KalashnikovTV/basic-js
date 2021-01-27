const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof +sampleActivity != Number){
    return false;
  }

  let ACTIVITIES_RATIO = MODERN_ACTIVITY / sampleActivity;
  let CONSTANT_RATE = 0.693 / HALF_LIFE_PERIOD;

  return Math.ceil((Math.log(ACTIVITIES_RATIO) / CONSTANT_RATE));
};
