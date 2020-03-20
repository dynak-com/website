const express = require('express');
const bodyParser = require('body-parser');
const format = require('date-format');
const fs = require('fs');
const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/new_message', (req, res) => {
  const timeStamp = format.asString('yyyy-MM-dd__hh-mm-ss-SSS', new Date());
  const filePath = `${__dirname}/messages/${timeStamp}.json`;
  const message = JSON.stringify({ ...req.body, timeStamp });
  fs.appendFileSync(filePath, message, function(err) {
    if (err) {
      throw err;
    }
    console.log('New message has been saved!');
  });
  return res.status(200).send('Done');
});

app.get('/health_check', (req, res) => {
  return res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
