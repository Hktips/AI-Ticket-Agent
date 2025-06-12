import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import {userRoute} from "./router/user.js";
const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/auth,userRoute")
mongoose.connect('process.env.MONGO_URI')
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        }).catch((err) => {
            console.error('Error connecting to MongoDB:', err);
        })
    })
