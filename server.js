const express = require('express');
const mongoose = require('mongoose')
const app = express();

//DB config
const db =require('./config/keys').mangoURI;

//connect to mongodb
mongoose
.connect(db)
.then(() => console.log('MangoDb connected!'))
.catch(err => console.log(err));


// lets write our first route
app.get('/', (req,res) => res.send('Hello Jenna'))

const port = 8020;
app.listen(port, () => console.log(`Server running on port ${port}`));