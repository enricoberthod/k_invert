const k_invert = require('./k_invert').k_invert

const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000
const url = 'http://localhost:8000'


app.get('/', (req, res) => res.send('Hello World!'))


var a = [1,2,3,4,5]

app.get('/k_invert', (req, res) => {
    var a = k_invert(a,req.query.k);
    var risultato = {result: a};
    res.send(risultato);
})




var server = app.listen(PORT, () => console.log('Listening on port ' + PORT))


module.exports = app;
module.exports = server;