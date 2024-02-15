import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { Database } from './database.mjs';

const app = express();
const port = 8080;

app.use(express.static(path.join('public')));

app.use(bodyParser.json());
const testArray = ['test'];

const mongoUrl = 'mongodb://127.0.0.1:27017?retryWrites=true&w=majority';
const dbName = 'RecipeShareDB';

const db = new Database(mongoUrl, dbName);

try {
    app.get('/M00948848/search', (req, res) => {
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
    app.get('/M00948848/test', (req, res) => {
        res.send("test")

    });
    app.post('/M00948848', (req, res) => {
        testArray.push(req.body);
        res.send('data received');
    });

    
    app.post('/M00948848/insertDocument', async (req, res) => {
        const { collectionName, document } = req.body;
    
        if (!collectionName || !document) {
            return res.status(400).send({ error: 'Collection name and document are required.' });
        }
    
        try {
            const result = await db.insertDocument(collectionName, document);
            res.send({ message: 'Document inserted successfully', result: result });
        } catch (error) {
            console.error('Error inserting document:', error);
            res.status(500).send({ error: 'Failed to insert document' });
        }
    });

    app.get('/M00948848/retrieveDocument', async (req, res) => {
        const { collectionName, query } = req.query;
    
        if (!collectionName) {
            return res.status(400).send({ error: 'Collection name is required.' });
        }
    
        try {
            const documents = await db.findDocuments(collectionName, query ? JSON.parse(query) : {});
            res.send(documents);
        } catch (error) {
            console.error('Error retrieving documents:', error);
            res.status(500).send({ error: 'Failed to retrieve documents' });
        }
    });
    
    

    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}/`);
    });
} catch (err) {
    console.error('Failed to connect to MongoDB', err);
}