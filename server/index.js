const express = require('express');

const app = express();
const PORT = 3000;

const Mail = require('../db/Mail.js');
const Post = require('../db/Post.js');

app.use(express.json());
app.use(express.static(__dirname + '/../public'));




app.get('/mail', (req, res) => {
  let roomNum = req.params.room
  Mail.find({room: 355})
    .then(results => {
      res.json(results)
    })
    .catch(error => {
      res.json(error)
    })
})





app.get('/posts', (req, res) => {
  Post.find({type: 'post'})
    .then(results => {
      res.json(results)
    })
    .catch(error => {
      res.json(error)
    })

})


app.post('/posts', (req, res) => {
  let post = new Post(req.body)
  post.save()
    .then(result => {
      res.json(result)
    })
    .catch(error => {
      res.json(error)
    });
})




app.post('/mail', (req, res) => {
  let test = new Mail(req.body);
  test.save()
    .then(result => {
      res.send(result)
    })
    .catch(error => {
      res.send(error)
    })
})



// Server Listening
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
