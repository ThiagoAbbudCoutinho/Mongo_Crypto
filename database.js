require('dotenv').config()
const mongoose  = require('mongoose');
const uri = process.env.ATLAS_URI;
//const client = new MongoClient(uri);

(async () => {
  try {
    await mongoose.connect;
    console.log(
      `Role of database - Host: `
    );
  } catch (e) {
    console.log('Error: ', e.message);
  }
})();