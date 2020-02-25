const contacts = require('./models/contracts');
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const sequelize = require('./utils/database/database');

app.use(express.json({ extended: false }));

//Define route
app.use('/api/contacts', require('./routes/api/contracts'));

const PORT = 5000;
sequelize.sync().then(result => {
  app.listen(PORT, () => console.log('SERVER START'));
});
