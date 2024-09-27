import mongoose from "mongoose";

const googleSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:true
    }
})
const Google = mongoose.model("Google",googleSchema);

export default Google;