const express = require("express"); // Imported or got the express package
const app = express(); // Created a application instance from express
const port = 3000; // Create a port variable on which application will run

//BASIC GET ROUTE THAT RESPONDS WITH HELLO WORLD
//It create a get route for '/' and responses
//It takes a path and a callback which has request and response objects from express
//To repsond to a request we use response.send().
app.get("/", (request, response) => {
  response.send("<b>HELLO WORLD</b>");
});

//http://localhost:3000/get-marks?name=keshav&age=20
//Name and age are query parametres used to pass information.
//They can be accessed using request.query object.
app.get("/get-marks", (req, res) => {
  //   const name = req.query.name;
  //   const age = req.query.age;
  const { name, age } = req.query; // accessing values using object destructing.

  const marks = {
    tanish: 99,
    rahul: 55,
    keshav: 90,
  };

  const userMarks = marks[name];
  res.send(`${name} of age ${age} Scored ${userMarks}`);
});

//Started the application using listen function which takes port as first argument
//And a callback function that will run after successfull execution
//This creates a long running application/process on machine
app.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});
