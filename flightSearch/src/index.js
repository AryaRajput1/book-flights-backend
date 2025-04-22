const express = require('express');
const { PORT, bodyParser } = require('./config/serverConfig');

const startAndRunServer = () => {
    const app = express()

    app.use(bodyParser.urlencoded({ extends: true }))

    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    })
}

startAndRunServer()