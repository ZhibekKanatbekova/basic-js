const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  let cleanArr = array
    .filter(
      (it) => typeof it !== "boolean" && typeof it !== "number" && it != null && it !== " "
    )
    .sort()
    .map((i) => i.slice(0, 1))
    .join("")
    .toUpperCase();
  if (!cleanArr.length) {
    return false;
  } else {
    return cleanArr;
  }
};
