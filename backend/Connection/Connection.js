const mongoose = require("mongoose");
const connection = async () => {
    try{
        const response = await mongoose.connect('${process.env.MONGO_URL}');
        if(response){
            console.log("Connected to DB");
        }
    }
    catch (error){
        console.log(error);
    }
}; 
connection();