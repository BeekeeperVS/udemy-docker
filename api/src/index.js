const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const {connectDb} = require("./helpers/db");
const {host, port, db, authApiUrl} = require("./configuration/index");

const app = express();

const postSchema = new mongoose.Schema({
    name: String
});
const Post = mongoose.model("Post", postSchema);
const startServer = () => {
    app.listen(port, () => {
        console.log(`Started api service on port: ${port}`);
        console.log(`On host: ${host}`)
        console.log(`Our Database: ${db}`)
    });

    const silence = new Post({name: "Silence3"});
    // silence.save(function (err, savedSilences) {
    //     if(err) console.error(err);
    //     // console.log("savedSilences", savedSilences);
    // })
    Post.find(function (err, posts) {
        if(err) return console.error(err);
        console.log("Posts",posts);
    });
}

app.get('/test', (req, res) => {
    res.send("Our api server is working correctly")
});

app.get('/api/test-api-data', ((req, res) => {
    res.json({
        testApiService: true
    })
}))

app.get('/test-current-user', (req, res) => {
    axios.get(authApiUrl+"/currentUser").then(response => {
        res.json({
            testCurrentUser: true,
            currentUser: response.data
        });
    });
});

connectDb()
    .on('error', console.log)
    .on('disconnect', connectDb)
    .once('open', startServer);