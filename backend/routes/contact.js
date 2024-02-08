const express = require ('express');
const router = express.Router ();

router.get('/',(req,res)=>{
  obj = {
    name:"Aditya Verma",
    email: "adityaverma2369@gmail.com",
    phone:"2369"
  }
  
  res.json(obj)

})
module.exports = router;