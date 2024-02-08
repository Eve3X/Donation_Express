const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://adminadmin:adminadmin@cluster0.hrbhnkv.mongodb.net/"

const connectToMongo = () => mongoose.connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  });

// const connectToMongo = async(req,res) =>{
//   mongoose.connect(mongoURI, ()=> {
//     console.log("Connected to mongo successfully"); yes lmao
//   })
// }

module.exports = connectToMongo;