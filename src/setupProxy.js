// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/web',
    createProxyMiddleware({
      target: 'https://dpirs.smartschoolerp.com',
      changeOrigin: true,
      secure: false,
    })
  );

  app.use(
    '/lms',
    createProxyMiddleware({
      target: 'https://dpirs.smartschoolerp.com',
      changeOrigin: true,
      secure: false,
    })
  );
};
