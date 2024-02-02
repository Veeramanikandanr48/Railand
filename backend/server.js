const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const blogRoutes = require("./routes/blogRoutes");
const serviceRoutes = require('./routes/serviceRoutes')

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// MongoDB connection
const connectToMongoDB = async () => {
  try {
    const connectionString = "mongodb+srv://veera:Railand%40Veera@cluster0.fydvm4t.mongodb.net/test";
    await mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

connectToMongoDB();

//-------------------------------------------------------------------------------------------------------------------------------

// Use the blog routes
app.use("/blogs", blogRoutes);

app.use("/services", serviceRoutes);

//-------------------------------------------------------------------------------------------------------------------------------

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app; // Export the app for testing or other potential use
