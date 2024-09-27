import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import { oauth2client } from "../utils/googleConfig.js";
import generateToken from "../utils/generateToken.js";
import axios from "axios";
import Google from "../model/google.model.js";


export const Signup = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const email = req.body.email;

    
    if (password !== confirmPassword) {
      return res
        .status(200)
        .json({ error: "Password doesnt match", success: false });
    }

    if (!username || !password || !email || !confirmPassword) {
      return res
        .status(200)
        .json({ error: "Please fill all the fields", success: false });
    }
    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
      return res
        .status(200)
        .json({ error: "Email already exists", success: false });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      password: hashedPassword,
      email,
    });
    if (newUser) {
      await newUser.save();
    }
    res.status(200).json({
      msg: "User created Successfully",
      success: true,
    });
  } catch (error) {
    console.log("Error in the signup Controller", error.message);
    res.status(500).json({
      msg: "Internal Server Error",
      success: false,
    });
  }
};

export const googleSignup = async(req,res)=>{
  try {
    const {code} = req.query;
    const googleRes = await oauth2client.getToken(code);
    
    oauth2client.setCredentials(googleRes.tokens);
    
    const userRes = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`)
    

    const {email,name:username,picture:image} = userRes.data;
    let googleUser = await User.findOne({email});
    
    
     if(googleUser){
       return res.status(200).json({msg:"User already exists",success:false})
     }
    if(!googleUser){
      googleUser = await User.create({email,username,image});
      
    }
    return res.status(200).json({
      "success":true,
      msg:"User created Successfully",
      googleUser
      
    })
  } catch (error) {
    res.status(500).json("Internal Server Error")
    console.log("error in the googleSignup" , error)
  }
}

export const googleLogin = async(req,res)=>{
  try {
    const {code} = req.query;
    const googleRes = await oauth2client.getToken(code);
    
    oauth2client.setCredentials(googleRes.tokens);
    
    const userRes = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`)
    

    const {email,name:username,picture:image} = userRes.data;
    let googleUser = await User.findOne({email});
  
    if(!googleUser){
      return res.status(200).json({msg:"User does not exist",success:false})
    }
    generateToken(googleUser._id,res);
    console.log(googleUser)
    return res.status(200).json({
      "success":true,
      msg:"User Logged In Successfully",
      googleUser
      
    })
  } catch (error) {
    res.status(500).json("Internal Server Error")
    console.log("error in the googleSignup" , error)
  }
}

export const Login = async(req,res)=>{
  try {
    const email = req.body.email;
  const password = req.body.password;
  
  if(!email || !password){
   return res.status(200).json({msg:"Please fill all the fields",
      success:false})
  }

  const user = await  User.findOne({email});
  console.log(user)
  if(!user){
    return res.status(200).json({msg:"User does not exist",success:false})
  }
  const isPassword = await bcrypt.compare(password,user.password);
  if(!isPassword){
    return res.status(200).json({msg:"Invalid Password",success:false})
  }
  generateToken(user._id,res);
  res.status(200).json({msg:"User logged in successfully",
    success:true,
  user})
 
  

  } catch (error) {
    console.log("Error in the Login controller" ,error.message)
    res.status(500).json({msg:"Internal server error"})
  }
}


export const Logout = (req,res)=>{
  const token = req.cookies.jwt;
  
  if(!token){
    return res.status(200).json({msg:"Please login first",success:false})
  }
  res.cookie('jwt' , '' , {
    maxAge:0
  })
  return res.status(200).json({msg:"User logged out successfully",
    success:true})


}
