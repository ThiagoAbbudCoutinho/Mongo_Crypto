//import
require('dotenv').config();
const mongoose = require('mongoose');
//connect to db via DB's url
const ATLAS_URI = process.env.ATLAS_URI;
mongoose.connect(ATLAS_URI,{useNewUrlParser:true})
    .then(() => console.log('db connected hi mongon'))
    .catch(e => console.log(e));
//All other calls to DB are made on serve