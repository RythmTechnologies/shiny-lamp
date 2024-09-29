import express, { Application } from "express";
import config from "./config/config";

const app: Application = express();

//Global Middleware
app.use(express.urlencoded({ extended: true }));

app.listen(config.express.port, () => {
  console.log(
    `Server started on port ${config.express.port}, baseURL: ${config.express.baseURL}`,
  );
});
