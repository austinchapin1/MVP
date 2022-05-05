const express = require('express');

const app = express();
const PORT = 3000;

const Mail = require('../db/Mail.js');
const Post = require('../db/Post.js');
const Reply = require('../db/Reply.js');

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


app.post('/postReply', (req, res) => {
  let { id, text } = req.body;
  let reply = new Reply({postID: id, room: 355, text: text});
  reply.save();

  Post.findOne({_id: id})
    .then(result => {
      result.responses.unshift(text)
      console.log(result.responses)
    })


})




app.delete('/:id', (req, res) => {
  let id = req.params.id;
  Mail.deleteOne({_id: id})
    .then(result => {
      res.json(result)
    })
    .catch(error => {
      res.json(error)
    })
})



// Server Listening
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
