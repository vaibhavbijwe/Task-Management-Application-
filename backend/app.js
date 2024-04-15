const express = require("express");
const app = express();
require("./Connection/Connectio");
require("dotenv").config();


app.use("/", (req, res) => {
    res.send("Hello From Bacakend side");
});

const PORT = 1000;

app.listen(PORT, () => {
    console.log("Server started");
});