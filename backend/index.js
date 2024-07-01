import express from "express";
import {PORT, mongoDBURL} from "./config.js"
import mongoose from 'mongoose'

const app = express() //define the variable for express js

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("Working server?")
});

app.post('/books', async (request, response) => {
    try{

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

mongoose.connect(mongoDBURL) 
    .then(()=>{
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error);
    })
