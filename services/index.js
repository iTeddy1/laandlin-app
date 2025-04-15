const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

const port = 30001;

app.use(express.json());

mongoose
  .connect(process.env.EXPO_DB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
