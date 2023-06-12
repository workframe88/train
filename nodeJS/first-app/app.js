const os = require("os");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//console.log("Total memory: " + totalMemory);

console.log(`Total Memmory: ${totalMemory}`);
console.log(`Total Memmory: ${freeMemory}`);
