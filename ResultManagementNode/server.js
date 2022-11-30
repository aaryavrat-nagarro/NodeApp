const express = require("express");
const app = express();

const connectDB = require("./config/db");

connectDB();

const PORT = process.env.port || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded());
app.use(require('express-ejs-layouts'));
app.set('layout', 'layouts/layout');
app.use("/teacher",require("./routes/teacher"));
app.use("/student",require("./routes/student"));


app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => { console.log(`Running on port ${PORT}`)});