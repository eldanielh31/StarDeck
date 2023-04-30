require('dotenv').config();


const cartaRoutes = require('./Routes/Carta')
const deckRoutes = require('./Routes/Deck')
const mongoUrl = process.env.DATABASE_URL;
const port = process.env.PORT;

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to database');
}).catch((error) => {
    console.log('Error connecting to database:', error);
});

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.json({ limit: '50mb' }));

app.use(cors({
    origin: '*'
}));


app.use('/carta', cartaRoutes);
app.use('/deck', deckRoutes);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

