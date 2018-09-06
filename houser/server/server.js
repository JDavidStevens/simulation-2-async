require('dotenv').config();
const express = require('express');
const bodyParser=require('body-parser');
const authCtrl=require('./Controllers/authCtrl');
const propCtrl=require('./Controllers/propCtrl');
const session=require('express-session');

const checkForSession =require('./middlewares/checkForSession');

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
app.use(checkForSession);

//Authorization Endpoints
app.post('/api/auth/login',authCtrl.login);
app.post('/api/auth/register',authCtrl.register);
app.post('/api/auth/logout',authCtrl.logout);

//Properties Endpoints
app.get('/api/properties',propCtrl.inventory);
app.post('/api/properties',propCtrl.add);
app.delete('/api/properties/:id',propCtrl.delete);

app.listen(SERVER_PORT, ()=>{
    console.log(`Server is listening on port ${SERVER_PORT}.`)
})