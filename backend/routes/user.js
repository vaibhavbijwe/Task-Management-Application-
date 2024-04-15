const router = require("express").router();
const user = require("../models/user");

//SIGN IN API
router.post("/sign-in", async (req, res) =>{
    try{
        const { username } = req.body;
        const { email } = req.body;
    
         const existinguser = await user.findOne({ username : username});
         const existingemail = await user.findOne({email : email})
         if (existinguser)
         {
            return res.status(400).json({ message: "Username already exixts"});
         }else if (username.length < 3){
            return res.status(400).json({ message: "Username should have at least 4 Characters"});
         }
    
         if (existingemail)
         {
            return res.status(400).json({ message: "email already exixts"});
         }
    
         const newuser = new user ({
            username:req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        await newuser.save();
        return res.status(200)({message: "signIn Successfully"});
    }catch(error)
    {
        console.log(error);
        res.status(400).json({ message: "Internal server error"});
    }

});

module.exports = router;
