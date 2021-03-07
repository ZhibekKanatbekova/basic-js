const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (Array.isArray(members)) {
      let cleanArr = members
        .filter((it) => typeof it === "string")
        .map((x) => x.trim().slice(0, 1).toUpperCase())
        .sort()
        .join("");

      if (!cleanArr.length) {
        return false;
      } else {
        return cleanArr;
      }
    } else {
      return false;
    }
};
