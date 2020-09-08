require('dotenv').config(); // Sets up dotenv as soon as our application starts

import express from "express"

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.use('/api/v1', (req, res, next) => {
  res.send('Hello');
  next();
});

app.listen(`${port}`, () => {
  console.log(`Server now listening at localhost:${port}`);
});

module.exports = app;
