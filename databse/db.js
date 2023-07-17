import mongoose from "mongoose";
// const mongoose=require('mongoose');
import dotenv from 'dotenv';

dotenv.config();

const USERNAME= process.env.DB_USERNAME;
const PASSWORD= process.env.DB_PASSWORD;

const connection=()=>{
    
    const URI=`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.aiwsckm.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(URI,{useNewUrlParser:true});

    mongoose.connection.on('connected',()=>{
        console.log('database connected successfully');
    })
    mongoose.connection.on('disconnected',()=>{
        console.log('Database disconnected');
    })
    mongoose.connection.on('error',(error)=>{
        console.log('error while connecting with database',error.message);
    })
    }

export default connection;