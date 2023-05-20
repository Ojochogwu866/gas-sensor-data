require("dotenv").config();
const express = require("express");
const app = express();
//connect Database
const connectDB = require("./db/connect");
//routers
const dataRouter = require("./routes/data");
app.set("trust proxy", 1);
app.use(express.json());

//swagger
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
//routes

app.get("/", (req, res) => {
  res.send('<h1>gas-data-api</h1><a href="/api-docs">Documentation</a>');
});
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use("/api/v1/", dataRouter);

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
