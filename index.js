const PORT = 3000;
const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const server = http.createServer(app);


// app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

app.use('/burgers', require("./routes/burgers"))

app.post('/', (req, res) => {
   console.log("body: ", req.body);
   res.send('<h1>Post request</h1>');
})

app.put('/:burger/:restaurant/:price', (req, res) => {
  const body = JSON.stringify(req.body);
  const params =  JSON.stringify(req.params);   
  res.send(`<h1>Put request with a url param of ${params}, and a body of ${body}</h1>`);

})

app.delete('/', (req, res) => {

})

server.listen(3000, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log("Server listening on port 3000!");
  }
});