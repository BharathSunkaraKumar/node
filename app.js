const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const filepath = path.join(__dirname, './project/about.html')

app.get('/', (req, res) => {
    res.send('hello world!');
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`my ${PORT} is running`)
})