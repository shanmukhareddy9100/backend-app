import express from "express";
import expressLayouts from "express-ejs-layouts";
import session from "express-session";

import mongoose from "mongoose";
import dbConnect from "./config/db.js";

import dotenv from "dotenv";

// import { productRouter } from "./routes/productRoute";
import {storeRouter} from "./routes/storeRoute.js"

const app = express()

dotenv.config();

app.set("view engine","ejs");
app.set("views","views");

app.use(expressLayouts)
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.use(session({
    secret : "secretKey",
    resave : false,
    saveUninitialized : false
}))

app.use("/",storeRouter);               //Beginning "/" goes to storeRouter --->> go to storeRoute.js
// app.use("/products",productRouter);
// app.use("/users",userRouter);
// app.use("/auth",authRouter);

const startServer = async ()=>{
    await dbConnect();                      //Comnnection between MongoDb atlas and Backend render Server
    app.listen(1729,()=>{                   //start at the port 1729
        console.log("Server Started"); 
    });
}

startServer();