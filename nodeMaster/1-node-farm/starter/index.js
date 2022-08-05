//PACKAGES
//////
//fs === file system
const fs = require("fs");
//http === how to create a network(server)
const http = require("http");
//url ===
const url = require("url");

/////
/////
/*
//FILES

//reading from a file synchronously, blocking
const textIn = fs.readFileSync("./txt/input.txt", "utf-8"); //file encoding on the end utf-8 is common also it is also needed*
console.log(textIn);

//writing to a file synchronously, blocking
const textOut = `This is what we know about the avocado: ${textIn}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log(textOut);

//Non-blocking, asynchronous way
//This is not good practice, callback hell
fs.readFile("./txt/start.txt", `utf-8`, (err, data1) => {
  if (err) return console.log(`ERROR 🧨`);

  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
      console.log(data3);

      fs.writeFile(`./txt/final.txt`, `${data2}\n${data3}`, "utf-8", (err) => {
        console.log(`File has been written 📝`);
      });
    });
  });
}); //in node usually the parameters are (err, data) in a callback function
console.log(`Will read file first 🎈🎈🎈🎈`);

*/

//SERVER
//creating a server
const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found!</html>");
  }

  res.end("Hello from the server!");
});

//server.listen(port, host, callback function)
server.listen(8000, "127.0.0.1", () => {
  console.log(`Listening to requests on port 8000`);
});
