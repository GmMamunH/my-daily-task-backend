const express = require("express");

const app = express();

app.use(express.json());

// get html file
app.get("/", (req, res) => {
  res.send("Welcome to the My Daily Task API");
});



//  route not found
app.use((req, res, next)=>{
    res.status(404).json({message: "Page not found"})
})

// server error response
app.use((err, req, res, next) => {
    res.status(500).json({message: "Something went wrong"})
});
module.exports = app;
