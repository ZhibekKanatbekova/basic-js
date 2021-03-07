const CustomError = require("../extensions/custom-error");

module.exports = function transform(bar) {
 let arr = [...bar];
 let x = [];
 arr.map((it) => {
   switch (it) {
     case "--double-next":
       x.push(arr[arr.indexOf(it) + 1]);
       break;
     case "--double-prev":
       if (arr.indexOf(it) === 0) {
         arr.slice(arr.indexOf(it) - 1);
       } else {
         x.push(arr[arr.indexOf(it) - 1]);
       }
       break;
     case "--discard-prev":
       if (arr.indexOf(it) == 0) {
         arr.slice(arr.indexOf(it));
       } else {
         x.splice(x.indexOf(it), 2);
       }
       break;
     case "--discard-next":
       arr.splice(arr.indexOf(it), 2);
       break;
     default:
       return x.push(it);
   }
 });
 return x.filter((el) => el != null);
};
