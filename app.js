const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("common"));

/*
Drill #1 Requirements:

1.Create a route handler function on the path /sum that accepts two query parameters named a and b and find the sum of the two values. 

2.Return a string in the format "The sum of a and b is c". 

3.Note that query parameters are always strings so some thought should be given to converting them to numbers.

*/

// Drill 1
app.get("/sum", (req, res) => {
  const { a, b } = req.query;

  // Validatate a & b, make sure they are numbers
  if (!a) {
    return res.status(400).send("a is required");
  }

  if (!b) {
    return res.status(400).send("b is required");
  }
  //Apply parse float method to make sure its a number
  //The parseFloat() function parses a string and returns a floating point number.
  const numberA = parseFloat(a);
  const numberB = parseFloat(b);

  //The isNaN() function determines whether a value is NaN or not.
  if (Number.isNaN(numberA)) {
    return res.status(400).send("a must be a number");
  }

  if (Number.isNaN(numberB)) {
    return res.status(400).send("b must be a number");
  }

  // validation passed so perform the task
  const c = numberA + numberB;

  // format the response string
  const responseString = `The sum of ${numberA} and ${numberB} is ${c}`;

  // send the response
  res.status(200).send(responseString);
});
