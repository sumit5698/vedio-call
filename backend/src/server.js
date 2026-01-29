import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import { functions,inngest } from "./config/inngest.js";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";

const app = express()


app.use(clerkMiddleware()); //req. auth will be availabe in the request object


app.use(express.json());
app.use("/api/inngest", serve({ client: inngest, functions }));


app.get("/", (req, res) => {
    res.send("hello word!!!")
})


app.listen(ENV.PORT, () => {
    console.log("server started on port", ENV.PORT);
    connectDB();

});