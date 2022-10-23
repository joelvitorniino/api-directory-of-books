const express = require('express');
const route = require('./routes/routes');
const app = express();

require('./db/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(route);

app.listen(3000, () => {
    console.log("API Books started on Port 3000: http://localhost:3000")
});