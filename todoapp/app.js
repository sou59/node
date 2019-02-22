const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017/tasks';
const port = process.env.PORT || 3000;

const assert = require('assert');
const ObjectId = require('mongodb').ObjectId;


// Database Name
const dbName = "tasks";

app.use("/", express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/tasks/new", function (req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
        const db = client.db(dbName);

        const tasks = db.collection('tasks');
        tasks.insertOne({
            timestamp: new Date(),
            description: req.body.description
        });
    });
});

app.get("/tasks", function (req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
        if (!err) {
            const db = client.db(dbName);

            const tasks = db.collection('tasks');
            tasks.find({}).toArray((error, result) => {
                res.send(JSON.stringify(result));
            })
        }
    })
})

app.put("/tasks/update/:id", (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
        const db = client.db(dbName);

        const tasks = db.collection('tasks');
        tasks.update(
            {
                _id: new ObjectId(req.params.id)
            },
            {
                $set: {
                    description: req.body.description
                }
            }

        );
    });
});

app.delete("/tasks/delete/:id", function (req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
        const db = client.db(dbName);

        const tasks = db.collection('tasks');
        tasks.remove(
            {
                _id: new ObjectId(req.params.id)
            },
            function (error, results) {
                if (!err) {
                    console.log(results);
                } else {
                    console.log(error);
                }
            });
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})


app.listen(port);

