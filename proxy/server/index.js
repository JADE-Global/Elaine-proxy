const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.set('port', 3000);

app.use(cors());
app.use('/*', express.static(path.join(__dirname, '../client/dist')));

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on:', app.get('port'));
}