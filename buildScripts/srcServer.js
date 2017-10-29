/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';


import config from '../webpack.config.dev';

const PORT = 4000;
const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  stats: {
    colors: true,
  },
  port: PORT,
  publicPath: config.output.publicPath,
}));
// in order to get the live-reoad you need to use
// webpack-hot-middleware to :(
app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log('error', err);
  } else {
    console.log('Server running in: ', PORT);
    open(`http://localhost:${PORT}`);
  }
});
