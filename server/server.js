const express = require('express');
const app = express();
const api = require('./routes/index');
//const query = require('./routes/query');
const Handler = require('./handler/Handler');

const handler = new Handler();

const port = 3002;

app.use('/api', api);

app.use('/read', handler.readAll.bind(handler));

//app.use('/read', query);

app.listen(port, ()=> console.log(`Listening on port ${port}`));