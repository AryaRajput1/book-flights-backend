const express = require('express');
const { PORT } = require('./config/serverConfig');

const startAndRunServer = () => {
    const app = express()

    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    })
}

startAndRunServer()