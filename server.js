const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 8080;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const mongoUrl = 'mongodb://127.0.0.1:27017';
const dbName = 'RecipeShareDB';
const client = new MongoClient(mongoUrl);

async function main() {
    try {
        await client.connect();
        console.log("Connected successfully to MongoDB");

        app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, 'public', 'index.html'));
        });

        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}/`);
        });
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
}

main();
