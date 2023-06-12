const fs = require("fs");

const filse = fs.readdirSync("./");
// console.log(filse);

fs.readdir("./", function (err, files) {
  if (err) console.log("Error", err);
  else console.log("Result", filse);
});
