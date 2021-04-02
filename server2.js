const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.get('/p/:id', (req, res) => {
    app.render(req, res, '/post', req.params);
  });
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  const localhost = 3000;
  server.listen(localhost, (err) => {
    if (err) throw err;
    console.log(`Now serving on localhost: ${localhost}`);
  });
});
