"use strict";
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    let helloMessage = 'Hello World!';
    res.send(helloMessage);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
