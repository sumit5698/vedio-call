import express from "express";
import { ENV } from "./config/env.js";

const app = express()



app.get("/", (req, res) => {
    res.send("hello word")
})

console.log("mongo uri:", process.env.MONGO_URI);

app.listen(ENV.PORT, () => console.log("server running on port:", ENV.PORT));