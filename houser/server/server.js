require('dotenv').config();
const express = require('express');
const bodyParser=require('body-parser');
const session=require('express-session');

let {SERVER_PORT,SESSION_SECRET}=process.env;

const app = express();

app.use(bodyParser.json());
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    })
);

app.listen(SERVER_PORT, ()=>{
    console.log(`Server is listening on port ${SERVER_PORT}.`)
})