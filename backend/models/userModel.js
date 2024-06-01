const mongoose = require('mongoose')
const  Schema = mongoose.Schema

const userModel =  new Schema({
    emailId:{type:String},
    fullName:{type:String},
    password:{type:String},
    CreatedOn:{type:Date,default:new Date().getTime()}

});

module.exports = mongoose.model("User",userModel);