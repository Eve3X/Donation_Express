const express = require ('express');
const User = require('../models/User');
const router = express.Router ();
const {body, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const JWT_SECRET = 'vermaiscool'
var jwt = require('jsonwebtoken');

//Create a User using : POST "/api/auth/createuser". Doesn't require auth
router.post('/createuser',[
  body('name','Enter a valid name').isLength({min: 3}),
  body('email','Enter a valid email').isEmail(),
  body('password','The password shoul be atleast 5 characters').isLength({min: 5})
],async (req,res)=>{
  // If there is no errors then go ahead for validation 
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array() });
  }
  //Check whether a user with this email already exists
  let user = await User.findOne({email : req.body.email});
  // console.log(user)
  if(user){
    return res.status(400).json({error: "This email already exists with us"})
  }
  const salt = await bcrypt.genSalt(10);
  secPass = await bcrypt.hash(req.body.password, salt);

  //Create the user in the database field
    user = await User.create({
    name:req.body.name,
    email:req.body.email,
    password:secPass
  
})
const data = {
  user:{
    id:user.id
  }
}
const authtoken = await jwt.sign(data,JWT_SECRET);
// console.log(jwtData);
res.json({authtoken})
})

//authenticate a user using: POST"/api/auth/login" .No login required
router.post('/login',[
  body('email','Enter a valid email').isEmail(),
  body('password','Password should be atleast 5 characters').isLength({min: 5})


],async(req,res)=>{
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array() });
  }

  const {email,password} = req.body;
  try {
    let user = await User.findOneAndDelete({email});
    if(!user){
      return res.status(400).json({error:"Please try to login with correct credentials"})
    }
    
    const passwordCompare = await bcrypt.compare(password,user.password);
    if(!passwordCompare){
      return res.status(400).json({error:"Please try to login with correct credentials"})
    }

    const data = {
      user:{
        id:user.id
      }
    }
    const authtoken = await jwt.sign(data,JWT_SECRET);
    res.json({authtoken})

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error Occurred")
  }

})

module.exports = router;