import mongoose from "mongoose";

const connectDb = async()=>{
    try {
        const success = mongoose.connect(process.env.MONGO_URL);
        if(success){
            console.log("Connected to DB!")
        }
    } catch (error) {
        console.log("Error in the  database connection", error);
    }
}
export default connectDb;