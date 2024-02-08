const mongoose = require("mongoose")
const Schema  =mongoose.Schema;

const UserSchema = new Schema({
  name:{
    type:String,
    required:[true,"Name is required"]
  },
  email:{
    type:String,
    required:true,
    unique:[true,"Email should be different "]
  },
  password:{
    required:true,
    type:String
  }
})
module.exports = mongoose.model('user',UserSchema);