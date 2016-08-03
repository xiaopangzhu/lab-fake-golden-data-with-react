const path = require('path');
const express = require('express');

const app = express();

app.use(express.static('./views')).listen(3000);
app.use(express.static(path.join(__dirname, 'public')));

console.log('web server started on port 3000');