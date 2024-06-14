// Create web server
// 1. Create a web server
// 2. Create a route for "GET /comments"
// 3. Read the comments.json file and send the data to the client
// 4. Start the server and test it
// 5. Create a route for "POST /comments"
// 6. Read the comments.json file and add the new comment
// 7. Write the updated comments to the comments.json file
// 8. Send a success response to the client
// 9. Test the POST route using Postman

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const commentsPath = path.resolve(__dirname, 'comments.json');

app.get('/comments', (req, res) => {
  fs.readFile(commentsPath, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.use(express.json());

app.post('/comments', (req, res) => {
  fs.readFile(commentsPath, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
      return;
    }
    const comments = JSON.parse(data);
    comments.push(req.body);
    fs.writeFile(commentsPath, JSON.stringify(comments, null, 2), (err) => {
      if (err) {
        res.status(500).send('Internal Server Error');
        return;
      }
      res.status(201).send('Comment added');
    });
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});