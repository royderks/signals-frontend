/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');
const open = require('open');
const proxy = require('http-proxy-middleware');

const argv = require('./argv');
const port = require('./port');
const proxyConfig = require('./proxy-config');
const setup = require('./middlewares/frontendMiddleware');
const resolve = require('path').resolve;
const app = express();

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);
Object.keys(proxyConfig).forEach((key) => {
  app.use(key, proxy(proxyConfig[key]));
});


// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  open(`http://localhost:${port}`);
});
