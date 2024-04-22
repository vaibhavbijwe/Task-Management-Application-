const router = require("express").router();
const User = require("../models/user");

//SIGN IN API
router.post("/sign-in", async (req, res) =>{
    try{
        const { username } = req.body;
        const { email } = req.body;
    
         const existingUser = await User.findOne({ username : username});
         const existingEmail = await User.findOne({email : email})
         if (existingUser)
         {
            return res.status(400).json({ message: "Username already exixts"});
         }else if (username.length < 4){
            return res.status(400).json({ message: "Username should have at least 4 Characters"});
         }
    
         if (existingEmail)
         {
            return res.status(400).json({ message: "email already exixts"});
         }
    
         const newUser = new User ({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        await newUser.save();
        return res.status(200).json({message: "signIn Successfully"});
    }catch(error)
    {
        console.log(error);
        res.status(400).json({ message: "Internal server error"});
    }

});

module.exports = router;
