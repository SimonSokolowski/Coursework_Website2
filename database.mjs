import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';

export class Database {
    #database;
    #client;

    constructor(mongoUrl, dbName) {
        this.#client = new MongoClient(mongoUrl, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: false,
                deprecationErrors: true,
            }
        });
        
        this.#client.connect(); // Ensure the client is connected before usage
        this.#database = this.#client.db(dbName);
    }
    
    async insertDocument(collectionName, document) {
        const collection = this.#database.collection(collectionName);
        const result = await collection.insertOne(document);
        console.log(result);
        return result;
    }    

    async findDocuments(collectionName, query) {
        const collection = this.#database.collection(collectionName);
        const documents = await collection.find(query).toArray();
        return documents;
    }

    async find() {
        const collection = this.#database.collection("users");
        const query = {};
        const results = await collection.find(query).toArray();
        console.log(results);
    }
    
    async insertOne() {
        const collection = this.#database.collection("users");
        const newUser = {name: "Sam Adams", age: 23};
        const result = await collection.insertOne(newUser);
        console.log(result);
    }
    
    async insertMany() {
        const collection = this.#database.collection("users");
        const newUserArray = [
            {name: "Adams Sam", age: 230},
            {name: "Sam Adams", age: 23}
        ];
        const result = await collection.insertMany(newUserArray);
        console.log(result);
    }
    
    async replaceOne() {
        const collection = this.#database.collection("users");
        const query = { _id: new ObjectId('someid')};
        const newDocument = { name: "New Name", age: 100, email: "d@d.com"};
        try {
            const result = await collection.replaceOne(query, newDocument);
            console.log(`Modified ${result.modifiedCount} document(s)`);
        }
        catch(err) {
            console.log(`Failed to replace document: ${err}`);
        }
    }
    
    async updateOne() {
        const collection = this.#database.collection("users");
        const query = { age: 24 };
        const updateDoc = { $set: { age: 25, email: "d@d.com" } };
        const result = await collection.updateOne(query, updateDoc);
        console.log(`Updated ${result.modifiedCount} document(s)`);
    }
    
    async updateMany() {
        const collection = this.#database.collection("users");
        const query = { age: 24 };
        const updateDoc = { $set: { age: 25 } };
        const result = await collection.updateMany(query, updateDoc);
        console.log(`Updated ${result.modifiedCount} document(s)`);
    }
    
    async deleteOne() {
        const collection = this.#database.collection("users");
        const query = { age: 27 };
        const result = await collection.deleteOne(query);
        console.log(`${result.deletedCount} documents deleted.`);
    }
    
    async deleteMany() {
        const collection = this.#database.collection("users");
        const query = { age: 27 };
        const result = await collection.deleteMany(query);
        console.log(`${result.deletedCount} documents deleted.`);
    }

    async close() {
        await this.#client.close();
    }
}
