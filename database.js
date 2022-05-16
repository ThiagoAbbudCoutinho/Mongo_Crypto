//import
//require('dotenv').config();
const mongoose = require('mongoose');
//connect to db via DB's url

mongoose.connect("mongodb+srv://Thabbud:Abbud123!@cluster0.9y1a0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true})
    .then(() => console.log('db connected hi mongon'))
    .catch(e => console.log(e));
//All other calls to DB are made on serve