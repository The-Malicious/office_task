const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const router = require('./routes')

const app = express();
dotenv.config();

app.use(express.json())
app.use('/api/v1',router)



mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server successfully start on port no ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log("Errors :==========>",err));
