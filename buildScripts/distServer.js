/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const PORT = 4000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', (req, res) => {
  res.json([
    {
      id: 1, firstName: 'Giancarlos', lastName: 'Isasi', email: 'giancarlos@gmail.com',
    },
    {
      id: 2, firstName: 'Giancarlos', lastName: 'Isasi', email: 'giancarlos@gmail.com',
    },
    {
      id: 3, firstName: 'Giancarlos', lastName: 'Isasi', email: 'giancarlos@gmail.com',
    },
    {
      id: 4, firstName: 'Giancarlos', lastName: 'Isasi', email: 'giancarlos@gmail.com',
    },
  ]);
});

app.listen(PORT, (err) => {
  if (err) {
    console.log('error', err);
  } else {
    console.log('Server running in: ', PORT);
    open(`http://localhost:${PORT}`);
  }
});
