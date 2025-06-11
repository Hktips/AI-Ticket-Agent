import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect('process.env.MONGO_URI')
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        }).catch((err) => {
            console.error('Error connecting to MongoDB:', err);
        })
    })
