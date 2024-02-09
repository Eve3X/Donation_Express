const express = require("express")
const router = express.Router();

//Route to get all the data using : GET "api.auth/getuser"
router.get('/fetchuserdata',(req,res)=>{
  res.json({})
})