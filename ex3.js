// Exercise 3: Return the request headers
// Goal: return all the request headers back to the client as a JSON string.
//
// Run: node ex3.js   and open http://localhost:3000

const http = require("http");
const PORT=3000;
http.createServer((req,res)=>{
    // Goal: return all the request headers back to the client as a JSON string.
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(req.headers));
  
}).listen(PORT);

// write your code here
