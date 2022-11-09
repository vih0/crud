// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//     res.send("oi eu falo")
// })
// app.listen(3001, () => {
//     console.log("servidor fala")
// })

// Include the server in your file
const server = require('server');
const { get, post } = server.router;

// Handle requests to the url "/" ( http://localhost:3000/ )
server([
  get('/', ctx => 'Hello world!')
]);