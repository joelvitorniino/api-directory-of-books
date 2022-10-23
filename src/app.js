const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Hello, World!");
});

app.listen(3000, () => {
    console.log("API Books started on Port 3000: http://localhost:3000")
});