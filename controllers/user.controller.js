//controller are the decosion makers 

const User=require('../models/user.model');

const registerUser = async (req, res) => {
    try{
        const { username, email, password } =  req.body;

        //basic validation 
        if(!username || !email || !password){
            return res.status(400).json({message:"All fieslds are required"});
        }

        //if the user exists already
        const existing = await User.findOne({email:email.toLowerCase()});
        if(existing){
            return res.status(400).json({message: "user already exists"});
        }

        //create the new user
        const user = await User.create({
            username,
            email:email.toLowerCase(),
            password,
            loggedIn:false
        });
        res.status(201).json({
            message:"User registered",
            user:{id:user._id,email:user.email,username:user.username }
        });
    }
    catch(error){
        res.status(500).json({message:"internal server error"});
    }
}

const loginUser = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({
            email:email.toLowerCase(),
        });
        if(!user ){
            return res.status(400).json({
                message: "user not found"
            });
        }
        //compare passwords
        const isMatch = await user.comparePassword(password);
        if(!isMatch){
            return res.status(400).json({message: "invalid credintials"});
        }
        res.status(200).json({
            user:{
                id:user._id,
                email:user.email,
                username:user.username
            }
        })

    }
    catch(error){
        res.status(500).json({
            message:"internal server error"
        });
    }
}

const logoutUser  =async (req, res) =>  {
    try{
        const {email } =req.body;
        const user = await User.findOne({
            email
        });

        if(!user ) {
            return res.status(400).json({
                message:"user does not exists"
            })
        } 
        res.status(200).json({
            message:"user logged out sucessfully"
        });
    }
    catch(error){
        res.status(500).json({
            message:"internal server error"
        });
    }
}
module.exports= {
    registerUser,
    loginUser,
    logoutUser
}