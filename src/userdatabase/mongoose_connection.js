const mongoose = require("mongoose")
const users_collection1 = require('./userdata')

mongoose.connect('mongodb://localhost:27017/fbuserdata')
.then(()=>{console.log('Mongoose Collection successful at port 27017 ')})
.catch((err)=>{console.log(err)})



