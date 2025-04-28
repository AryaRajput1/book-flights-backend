const express = require('express');
const { PORT, bodyParser } = require('./config/serverConfig');
const router = require('./routes');

const startAndRunServer = () => {
    const app = express()

    app.use(bodyParser.json())
    app.use('/api', router)

    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    })
}

startAndRunServer()