require('dotenv').config();
const massive = require('massive');
const express = require('express');
const bodyParser=require('body-parser');
const cors = require('cors');
const authCtrl=require('./Controllers/authCtrl');
const propCtrl=require('./Controllers/propCtrl');
const session=require('express-session');
const checkForSession =require('./middlewares/checkForSession');
const path=require('path');

let {SERVER_PORT,SESSION_SECRET,CONNECTION_STRING}=process.env;

const app = express();
massive(CONNECTION_STRING).then(dbInstance=>{
    app.set('db',dbInstance)
}).catch(err=>console.log(err));

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'src')));
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    })
);

//Authorization Endpoints
app.post('/api/auth/login', authCtrl.login);
app.post('/api/auth/register', authCtrl.register);
app.post('/api/auth/logout', authCtrl.logout);

app.get('/api/checkForSession', checkForSession);

//Properties Endpoints
app.get('/api/properties',propCtrl.inventory);
app.post('/api/properties',propCtrl.add);
app.delete('/api/properties/:id',propCtrl.delete);

app.listen(SERVER_PORT, ()=>{
    console.log(`Server is listening on port ${SERVER_PORT}.`)
})