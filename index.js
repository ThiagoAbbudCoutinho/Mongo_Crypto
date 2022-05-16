const app = require('./app');
require('./database');

app.listen(process.env.PORT);
console.log('Server on port 3000');