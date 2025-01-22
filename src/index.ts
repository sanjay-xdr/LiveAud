const bodyParser = require("body-parser");
const express = require("express");
const messageRoute = require("./routes/messageRoute");
import { client } from "../src/config/redisClient";

const app = express();

const port: Number = 3000;

app.use(bodyParser.json());

app.use("/api", messageRoute);

const startServer = async () => {
  try {
    await client.connect();
    console.log("Connected to Redis");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log("Something Went Wrong ", error);
  }
};

startServer();
