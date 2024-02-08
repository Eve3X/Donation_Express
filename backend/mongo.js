// Importing
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const app = express();

// MongoDB connection URL
const connectionUrl = process.env.MONGODB_URL || "mongodb://0.0.0.0:27017/petsshop";

// Connect to MongoDB
mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  });


// Define routes
app.get("/home", (req, res) => {
    res.send("Hello");
});

// Start the server
const port = process.env.PORT || 2500;
app.listen(port, () => {
    console.log(`Listening to Port ${port}`);
});
