import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import Deck from './models/Deck.js';

const app = express();
const port = 5000

app.use(express.json())

mongoose.connect('mongodb+srv://uzairahmed4100:12342123344@cluster0.3bdojz2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log(`listening on port ${port}`);
        app.listen(5000);
    })

app.post('/decks', async (req: Request, res: Response) => {
    const neDeck = new Deck({
        title: req.body.title
    });

    const createdDeck = await neDeck.save();
    res.json(createdDeck);

})




//R9j4IdaDiQdiOWbB
