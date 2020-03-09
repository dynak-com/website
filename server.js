const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
const app = express();
const fs = require('fs');
let messages = require('./messages/messages.json');
// const port = process.env.PORT || 8080;
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, 'build')));

app.post('/new_message', (req, res) => {
  messages.push(req.body);
  messages = JSON.stringify(messages);
  fs.writeFile('./messages/messages.json', messages, function(err) {
    if (err) {
      throw err;
    }
    console.log('New message has been saved!');
  });
  return res.status(200).send('Done');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
