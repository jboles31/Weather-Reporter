require('dotenv').config()
var express = require('express')
var axios = require('axios')

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

let options = {
  headers: {
    'APPID': process.env.API_KEY,
    'id': 524901
  }
}

app.get('/api/:city', (req, res) => {
  console.log('req.params.city', req.params.city)

  axios.get(`api.openweathermap.org/data/2.5/weather?id=524901&APPID=${process.env.API_KEY}&q=${req.params.city}`)
  .then((data) => {
    console.log('DATA: ', data.data)
    res.send(data.data);
  })
  .catch((error) => {
    console.error(error);
    res.sendStatus(400);
  })
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});