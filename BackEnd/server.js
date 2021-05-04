const express = require('express');
const app = express();
const path = require('path');


app.get('/', (req, res) => {
    return res.status(200).sendFile(__dirname, '../FrontEnd/index.html')
});

app.listen(3000); //Listening on port 3000