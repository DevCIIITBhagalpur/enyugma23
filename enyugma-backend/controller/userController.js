// m3gablast3r
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { randomBytes } from "crypto";
import db from "../db.js";

dotenv.config();



export const Register = async (req, res, next) => {
  const details = req.body;
  const userExist = await db.isUserExists(details.email);
  if (userExist) {
    res.status(400).json({
      message: "User already exists",
    });
  } else {
    // if (details.password !== details.confirmPassword) {
    //   res.status(400).json({
    //     message: "Invalid password",
    //   });
    // }
    // delete details.confirmPassword;
    details.token = randomBytes(32).toString("hex");
    const token = jwt.sign(
      {
        email: details.email,
        token: details.token,
      },
      process.env.key
    );

    const hashedPass = bcrypt.hash(details.password, 10);

    details.password = hashedPass;
    await db.createUser(details);

    const copy = { ...details };
    delete copy.password;
    delete copy.token;

    res.status(200).json({
      user: copy,
      token: token,
    });
  }
};

export const Login = (email, password) => {
  const isUserExists = db.isUserExists(email);

  if (!isUserExists) {
    res.status(404).json({
      message: "User isn't registered",
    });
  }
  const data = db.getUser(email);
  const isValid = bcrypt.compare(originalhash, data.password);
  delete data.password;
  delete data.token;
  if (isValid) {
    res.status(200).json({
      user: data,
    });
  } else {
    res.status(400).json({
      message: "invalid credentials",
    });
  }
};

// const Signup = async (req,res) => {
//     try {
//         const {
//             firstname,
//             lastname,
//             emailId,
//             password,
//             confirmPassword,
//             technicalEvents,
//             culturalEvents,
//             instituteName,
//             batchYear,
//             phoneNumber,
//             teamSize,
//             city,
//             pincode,
//             state
//         } = req.body;

//         const existingUser = await User.findOne({emailId:emailId});

//         if(existingUser){
//             return res.status(400).json({
//                 success:false,
//                 message:"User already exist"
//             });
//         }

//         if(password !== confirmPassword){
//             return {
//                 success:false,
//                 message:"Password does not match"
//             }
//         }

//         const hashedPassword = await bcrypt.hash(password,10);

//         const newUser = new User({
//             firstname:firstname,
//             lastname:lastname,
//             emailId:emailId,
//             password:hashedPassword,
//             confirmPassword:confirmPassword,
//             technicalEvents:technicalEvents,
//             culturalEvents:culturalEvents,
//             instituteName:instituteName,
//             batchYear:batchYear,
//             phoneNumber:phoneNumber,
//             teamSize:teamSize,
//             city:city,
//             pincode:pincode,
//             state:state
//         });

//         await newUser.save();

//         res.status(200).json({
//             success:true,
//             message:"Registration successful"
//         });
//     } catch (error) {
//         return {
//             success:false,
//             message:"Registration failed"
//         };
//     }
// }

// // signin user if they are registered previously successfully
// const Signin = async (req,res) => {
//     try {
//         const {emailId, password} = req.body;

//         // find the user by email exist or not
//         const user = await User.findOne({emailId:emailId});

//         if(!user){
//             return res.status(404).json({
//                 message:'User does not exist'
//             })
//         }

//         // Boolean passwordMatch = (password !== user.password);
//         const passwordMatch = await bcrypt.compare(password, user.password);

//         // console.log(password);
//         // console.log(user.password);
//         // console.log(passwordMatch);
//         if(!passwordMatch){
//             return res.status(400).json({
//                 message:'Invalid Credentials'
//             })
//         }

//         res.status(200).json({
//             message:'Login Succesfully'
//         })
//     } catch (error) {
//         res.status(500).json({
//             error:'Internal Server Error'
//         });
//     }
// }

// module.exports = {
//     Signup,
//     Signin,
// }
