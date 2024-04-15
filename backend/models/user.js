const mongoose = require("mongoose");
const task = require("./task");
const userschema = new mongoose.Schema({

    email: {
        unique: true,
    }, 
    password : {
        type : String,
        require : true,
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "task",
      }],      
});

module.exports = mongoose.model("user" , userschema);
