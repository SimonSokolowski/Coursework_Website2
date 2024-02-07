const bodyParser = require('body-parser')
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 8080;
const path = require('path');

app.use('/M00948848', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
const testArray = ['test'];

const mongoUrl = 'mongodb://127.0.0.1:27017';
const dbName = 'RecipeShareDB';

const client = new MongoClient(mongoUrl);

async function main() {
    try {
        await client.connect();
        console.log("Connected successfully to MongoDB");

        app.get('/test/search', (req, res) => {
            if(req.query.name === undefined) {
                res.send({"error": "Missing 'name' query parameter"})
            } else {
                const testFound = [];
                for(let tmpTest of testArray) {
                    if (tmpTest.name === req.query.name) {
                        testFound.push(tmpTest)
                    }
                    testFound.push(req.query.name)
                    testFound.push(tmpTest.name)
                }
                res.send(JSON.stringify(testFound));
            }

        });
        app.post('/test', (req, res) => {
            testArray.push(req.body);
            res.send('data received');
        });

        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}/`);
        });
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
}

main();
