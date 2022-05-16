const express = require('express');
const app = express();

const Crypto = require('./model/Crypto');

// settings
app.set('views', __dirname + '/client');
app.set('view engine', 'ejs');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Request root and respond with item Model Crypto (from models schema)
//and if it exists based on db connected too we propagate and
//return as array to index
app.get('/', async (req, res) => {
 
    if(req.query.key === "123"){
            const cryptos = await Crypto.find();
            res.render('index', { cryptos });
        } else { res.send('sorry you are not authed') }
        
    })
    
    // Create Task
    app.post('/add', async (req, res) => {
        const newCrypto = new Crypto({
            crypto: req.body.crypto,
            description: req.body.description
        });
        await newCrypto.save();
        res.redirect('/?key=123');
    })
    
    // Create Task
    app.post('/delete', async (req, res) => {
        const cryptoId = req.body.cryptoId;
        console.log(cryptoId);
        const deleted = await Crypto.deleteOne({ _id: cryptoId });

        if(deleted.deletedCount == 1){
            console.log('crypto with id ' + cryptoId + ' has been deleted');
            //refresh view
            res.send('crypto with id ' + cryptoId + ' has been deleted');
        } else {
            console.log('crypto with id ' + cryptoId + ' has NOT been deleted and probs doesnt exist');
            res.send('crypto with id ' + cryptoId + ' has NOT been deleted and probs doesnt exist');
        }
    
        
    })
    
    // STATIC Files
    app.use(express.static(__dirname + '/client'));

module.exports = app;