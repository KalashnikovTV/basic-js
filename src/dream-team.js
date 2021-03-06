const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
  }

  let result = [];

  members.forEach(member => {
    if (typeof member === 'string') {
      member = member.trim();
      result.push(member[0].toUpperCase());
    }
  });

  return result.sort().join('');
};
