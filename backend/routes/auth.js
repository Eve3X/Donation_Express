const express = require ('express');
const User = require('../models/User');
const router = express.Router ();
const {body, validationResult} = require('express-validator')



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
  //Create the user in the database field
    user = await User.create({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password
  // }).then(user => res.json(user))
  // .catch(err =>{ console.log(err)
  // res.json({error: 'Please enter a unique email'})}
})
res.json({Nice:"True"})
})
module.exports = router;