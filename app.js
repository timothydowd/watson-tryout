const express = require ('express');
const app = express()


const bodyParser = require('body-parser')
const apiRouter = require('./routes/apiRouter')

app.use(bodyParser.json());
app.use("/api", apiRouter);

app.set('view engine', 'ejs')
app.get('/home', (req, res) => {
    res.status(200).render('pages/home');
  });


module.exports = app;