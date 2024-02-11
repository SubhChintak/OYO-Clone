import mongoose from "mongoose";

const URL = process.env.MONGO_URI;

const connnectDB = async () =>{
    await mongoose.connect(URL, {
        useNewUrlParser : true ,
        useUnifiedTopology : true
    });
    console.log("DB connected...");
}

export default connnectDB;