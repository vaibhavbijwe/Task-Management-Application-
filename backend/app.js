const express = require("express");
const app = express();
require("./Connection/Connection");
require("dotenv").config();
const cors = require("cors");
const UserAPI = require("./routes/user")
app.use(cors()); 
app.use(express.json)
app.use("/api/v1", UserAPI);

app.use("/", (req, res) => {
    res.send("Hello From Bacakend side");
});

//Localhost:1000/api/v1/sign-in

const PORT = 1000;

app.listen(PORT, () => {
    console.log("Server started");
});