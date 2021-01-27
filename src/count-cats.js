const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let number = 0;

  array.forEach(el => {
	  el.forEach(elem => {
      if (elem === '^^') {
        number++;
      }
    });
  });

  return number;
};
