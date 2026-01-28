import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
    try{
        const conn = await mongoose.connect (ENV.MONGO_URI);

        console.log("mongoose connected successfully",conn.connection.host);
    }
    catch{
        console.log("error connecting to mongoose",error);
        process.exit(1);
    }
}