const express = require('express')
const app = express()

const mongoose = require('mongoose')
const cors = require('cors')

const User=require('./model/users')

// middleware
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())


const db_url = 'mongodb://localhost:27017/users'
mongoose.connect(db_url).then(()=>{
    console.log('connection established')
})

app.post('/register', (req,res)=>{
    User.findOne({mail:req.body.mail}).then((userData)=>{
        if(userData){
             res.send({message:'User already exists'})
        }
        else{
         let userData= new User({
            Name: req.body.name,
            SurName: req.body.surname,
            mail: req.body.mail,
            password: req.body.password
         })
         userData.save().then(()=>{
            res.send({message: 'user registered successfully'})
         })
         .catch(()=>{
            res.send({message:'user registration failed, try after sometime'})
         })
        }
    })
})

app.post('/login', (req,res)=>{
    User.findOne({mail:req.body.mail}).then((userData)=>{
        if(userData){
            if(req.body.password===userData.password){
             res.send({message:'Login successfully', status:200})
            }else{
                res.send({message:'Please enter your valid password'}) 
            }
        }
        else{
            res.send({message:'User not found'})
        }
       
    })
})



const port=4000;
app.listen(port, () => {
    console.log(`Server running on ${port}`);
  });
  

