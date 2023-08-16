// Schema code in seperate file

const mongoose = require('mongoose')

const userSchema=mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    SurName:{
        type:String,
        required:true
    },
    mail:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('User', userSchema)

