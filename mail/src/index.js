const express = require("express");
const axios = require("axios");
const {host, port, db, authApiUrl} = require("./configuration/index");

const app = express();

app.get('/api/send-mail', (req, res) => {
    console.log('api/send-mail');
    var config = {
        method: 'get',
        url: 'https://api.telegram.org/bot989635771:AAEt-whD3SqwmxXrqF4eFV2psr4KzxHjyBE/sendMessage?chat_id=-487235598&parse_mode=HTML&text=UdemyDocker.TestMailService',
        headers: {}
    };

    axios.get(config.url).then(function (response) {
        res.json(response.data);
    });

});

app.listen(port, () => {
    console.log(`Started mail service on port: ${port}`);
});