const express = require('express');

// const User = require('../db/User.js');
const Mail = require('../db/Mail.js');

const app = express();
const PORT = 1128;

app.use(express.json());

app.use(express.static(__dirname + '/../public'));


app.get('/mail', (req, res) => {

  Mail.find({`room: ${req.body.room}`}
    .then(results => {
      res.json(results)
    })
    .catch(error => {
      res.json(error)
    })
})



app.post('/mail', (req, res) => {
  console.log(req.body)

  // Mail.insertOne(foundMail)
})



// Server Listening
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`, __dirname);
});
