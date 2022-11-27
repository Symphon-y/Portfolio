require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Body Data
app.use(express.json());
// Serves Static Files
app.use(express.static(path.join(__dirname, '../build')));
// Starts Server on Specified Port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Listens for any route and redirects to home page
app.use('/*', (req, res) => {
  console.log(req);
  res.redirect('/');
});
