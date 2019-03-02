const app = require('./app');


app.listen(9090, err => {
  if (err) console.log('ERROR', err);
  else console.log(`server listening`);
});