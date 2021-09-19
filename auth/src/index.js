const express = require("express");
const axios = require("axios");
const {connectDb} = require("./helpers/db");
const {host, port, db, apiUrl, apiMailUrl} = require("./configuration/index");

const app = express();

const startServer = () => {
    app.listen(port, () => {
        console.log(`Started auth service on port: ${port}`);
        console.log(`On host: ${host}`)
        console.log(`Our Database: ${db}`)
    });

}

app.get('/test', (req, res) => {
    res.send("Our auth server is working correctly")
});
app.get('/test-api-data', ((req, res) => {
    axios.get(apiUrl + "/test-api-data").then(response => {
        res.json({
            testApiData: response.data.testApiService
        })
    })
}))
app.get('/currentUser', (req, res) => {
    let user = {
        id: 1256,
        email: "test213.user@gmail.com"
    };
    console.log(apiMailUrl);

    axios.get(apiMailUrl + "/send-mail").then(response => {
        console.log("Message send!", response.data);
    })

    res.json(user)


});

connectDb()
    .on('error', console.log)
    .on('disconnect', connectDb)
    .once('open', startServer);