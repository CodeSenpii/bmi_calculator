//jshint  esversion:6
const express = require('express');

const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Parsing info from the body use in your get and post functions
app.use(bodyParser.urlencoded({extended:true}));

app.get("/bmi",(req, res)=>{
  // res.send('Hello World');
  res.sendFile(__dirname + "/index.html");// grab file location w/dirname
});

app.post("/bmi", (req, res) =>{
  var weight = parseFloat(req.body.Weight);
  var height = parseFloat(req.body.Height);
  res.send("Answer: "+ (weight/(height*height)));
});

// CALCULATOR
app.get("/calculator", (req, res) =>{
  res.sendFile(__dirname + "/calculator.html");
});

app.post("/calculator", (req, res) => {
  var num1 = parseFloat(req.body.num1);
  var num2 = parseInt(req.body.num2);
  res.send("Answer: " + num1 * num2);
});

app.listen(port, () => {
  console.log('Server is Connected:$');
});
