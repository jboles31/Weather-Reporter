require('dotenv').config()
var express = require('express')
var axios = require('axios')

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/api/:city', (req, res) => {

  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&APPID=${process.env.API_KEY}`)
  .then((data) => {
    res.send(data.data);
  })
  .catch((error) => {
    console.error(error);
    res.sendStatus(400);
  })
})

app.listen(process.env.PORT, function() {
  console.log(`listening on port ${process.env.PORT}`);
});
