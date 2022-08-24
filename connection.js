require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = "mongodb+srv://wristwatch:CBiXY4lmjeU6Ahxc@cluster0.vuu23xz.mongodb.net/test";

mongoose.connect(connectionStr, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})
