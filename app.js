const express = require("express");
const cors = require("cors");
const tasksRoutes = require("./routes/task.route");
const app = express();

app.use(
  cors({
    origin: "*", // সব ডোমেইনের জন্য
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], // সব HTTP মেথডের জন্য
    allowedHeaders: ["Content-Type", "Authorization"], // প্রয়োজনীয় হেডার অনুমতি
  })
);
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use("/api/tasks", tasksRoutes);

// get html file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
});

//  route not found
app.use((req, res, next) => {
  res.status(404).json({ message: "Page not found" });
});

// server error response
app.use((err, req, res, next) => {
  res.status(500).json({ message: "Something went wrong" });
});


module.exports = app;
