const connectToMongo  = require('./db');
connectToMongo();

const express = require('express')
const app = express()
const port = 5000;
app.use(express.json())

app.use('/api/auth',require('./routes/auth'))
app.use('/api/contact',require('./routes/contact'))

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, ()=>{
  console.log(`Listening to port ${port}`);

})






