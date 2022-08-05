const fs = require("fs");

//reading from a file
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

//writing to a file
const textOut = `This is what we know about the avocado: ${textIn}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log(textOut);
