const User = require("../Model/User");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();


const Signup = async (req,res) => {
    try {
        const {
            firstname,
            lastname, 
            emailId, 
            password, 
            confirmPassword, 
            technicalEvents, 
            culturalEvents, 
            instituteName, 
            batchYear, 
            phoneNumber, 
            teamSize, 
            city, 
            pincode, 
            state
        } = req.body;

        const existingUser = await User.findOne({emailId:emailId});

        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User already exist"
            });
        }

        if(password !== confirmPassword){
            return {
                success:false,
                message:"Password does not match"
            }
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = new User({
            firstname:firstname,
            lastname:lastname, 
            emailId:emailId, 
            password:hashedPassword, 
            confirmPassword:confirmPassword, 
            technicalEvents:technicalEvents, 
            culturalEvents:culturalEvents, 
            instituteName:instituteName, 
            batchYear:batchYear, 
            phoneNumber:phoneNumber, 
            teamSize:teamSize, 
            city:city, 
            pincode:pincode, 
            state:state
        });

        await newUser.save();

        res.status(200).json({
            success:true,
            message:"Registration successful"
        }); 
    } catch (error) {
        return {
            success:false,
            message:"Registration failed"
        };
    }
}

// signin user if they are registered previously successfully
const Signin = async (req,res) => {
    try {
        const {emailId, password} = req.body;

        // find the user by email exist or not
        const user = await User.findOne({emailId:emailId});

        if(!user){
            return res.status(404).json({
                message:'User does not exist'
            })
        }

        // Boolean passwordMatch = (password !== user.password);
        const passwordMatch = await bcrypt.compare(password, user.password);

        // console.log(password);
        // console.log(user.password);
        // console.log(passwordMatch);
        if(!passwordMatch){
            return res.status(400).json({
                message:'Invalid Credentials'
            })
        }   

        res.status(200).json({
            message:'Login Succesfully'
        })
    } catch (error) {
        res.status(500).json({
            error:'Internal Server Error'
        });
    }
}

module.exports = {
    Signup,
    Signin,
}