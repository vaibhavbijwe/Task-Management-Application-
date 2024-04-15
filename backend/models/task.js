const mongoose = require("mongoose");
const Taskschema = new mongoose.Schema({
    
    title:{
        type : String,
        require: true,
        unique: true,
    },
    desc: {
        type : String,
        require : true,
    }, 
    important : {
        type : Boolean,
        default: false,
    },
    Complete : {
        type : Boolean,
        default: false,
    },
}, 
    {timestamps: true}
);

module.exports = mongoose.model("task" , Taskschema);
