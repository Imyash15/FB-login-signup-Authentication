const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

mongoose.set('strictQuery',true);



const users_schema1 = new mongoose.Schema({
    firstname:{
        type:String,
        lowercase:true,
        required:true
    },
    surname:{
        type:String,
        lowercase:true,
        required:true
    },
    usermail:{
        type:String,
        required:true,
        unique:true
    },
    userpassword:{
        type:String,
        required:true,
    },
    userdob:{
        type:Date,
        required:true
    },
    usergender:{
        type:String,
        required:true
    }


})

// convert password  into key wiht bcryptjs
users_schema1.pre('save', async function(next){
    this.userpassword = await bcrypt.hash(this.userpassword,12)
})

const users_collection1= new mongoose.model('users_collection1',users_schema1)
module.exports=users_collection1;