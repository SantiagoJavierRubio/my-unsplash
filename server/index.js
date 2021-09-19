import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Image from './models/Image.js';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Welcome to My-Unsplash backend server!");
});

app.get('/images', async (req, res) => {
    try {
        const storedImages = await Image.find()
        res.status(200).json(storedImages);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.post('/new', async (req, res) => {
    const imgData = req.body;
    try {
        const newImage = await new Image(imgData);
        await newImage.save();
        const newDataSet = await Image.find();
        res.status(200).json(newDataSet);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.post('/delete/:id', async (req, res) => {
    const imgId = req.params.id;
    try {
        await Image.findOneAndDelete({ _id: imgId });
        const newDataSet = await Image.find();
        res.status(200).json(newDataSet);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch(err => console.log(err.message));