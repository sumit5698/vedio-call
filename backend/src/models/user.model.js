import { User } from "@clerk/express";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        required:true,
        unique:true,
    },
    name: {
        required:true,
        type:string,
    },
    Image: {
        required:true,
        type:string,
    },
    clerkId: {
        required:true,
        type:string,
    }
    
},{timestamps:true});

export const User= mongoose.model("User",userSchema);