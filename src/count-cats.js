const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cats) {
 let ab = cats
   .flat()
   .filter((it) => typeof it === "string")
   .filter((x) => x == "^^")
   .reduce((acc, rec) => {
     return {
       ...acc,
       [rec]: typeof acc[rec] === "undefined" ? 1 : acc[rec] + 1,
     };
   }, {});
 return Object.values(ab);
  // remove line with error and write your code here
};
