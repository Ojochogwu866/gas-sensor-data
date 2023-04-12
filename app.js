require("dotenv").config();
const express = require("express");
const app = express();
//connect Database
const connectDB = require("./db/connect");
//routers
const dataRouter = require("./routes/data");
app.set("trust proxy", 1);
app.use(express.json());
//routes
app.use("/api/v1/gas-data", dataRouter);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
