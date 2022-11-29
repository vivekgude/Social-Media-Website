const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {MONGOURI} = require('./config/keys');

const PORT = process.env.PORT || 3001;

mongoose.connect(MONGOURI)
mongoose.connection.on('connected',()=>{
    console.log("Connected to dbms");
})
mongoose.connection.on('error',(err)=>{
    console.log(err);
})

app.listen(PORT,()=>{
    console.log("Server is running on",PORT)
})

require('./models/user');
require('./models/post');
require('./models/otp')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))
