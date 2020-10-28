const express = require('express');
const app = express();
const cors = require('cors');
const join = require('./routes/join');
const login = require('./routes/login');
const port = 3002;

//const AsyncHandler = require('./handler/AsyncHandler');
//const asyncHandler = new AsyncHandler();

app.use(cors()); // axios CORS policy troble shooting
app.use(express.json()); //body-parser option in express

//app.use('/join', asyncHandler.emailCheck.bind(asyncHandler));

app.use('/join', join);
app.use('/login', login);


app.listen(port, ()=> console.log(`Listening on port ${port}`));