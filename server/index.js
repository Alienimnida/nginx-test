const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send("I am a simple server");
})

app.listen(7777, () => {
    console.log("Listening on port 7777")
})