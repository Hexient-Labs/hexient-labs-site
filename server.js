const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

// START force HTTPS redirect
app.configure('production', () => {
  app.use((req, res, next) => {
    if (req.header['x-forwarded-proto'] !== 'https')
      res.redirect(`https://${req.header('host')}${req.url}`);
    else
      next()
  })
});
// END force HTTPS redirect

app.prepare()
  .then(() => {
    const server = express();

    server.get('*', (req, res) => {
      return handle(req, res)
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log('> Ready on port ' + port);
    })
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1)
  });
