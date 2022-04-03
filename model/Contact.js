const mongoose=require('mongoose')

// create schema

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:Number,
});

module.exports=Contact=mongoose.model('contact',contactSchema)