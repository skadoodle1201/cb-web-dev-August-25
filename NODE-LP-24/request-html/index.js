const express = require("express");
const path = require("path");

const app = express();

// By default for all routes or paths
// Since we have index.html on '/' route that will be served.
//this is a middleware
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.sendFile(`${path.join(__dirname, "index.html")}`);
// });

// app.get("/stylesheet.css", (req, res) => {
//   res.sendFile(`${path.join(__dirname, "stylesheet.css")}`);
// });

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
