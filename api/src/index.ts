import express from "express";
import dotnev from "dotenv";
import * as routes from "./routes";
import { createConnection } from "typeorm";
import bodyParse from "body-parser";

dotnev.config();

const port = process.env.SERVER_PORT;
const app = express();

app.use(bodyParse.json());
routes.register(app);

createConnection()
  .then((connection) => {
    // tslint:disable-next-line:no-console
    console.log("DB Connection Established");
  })
  .catch((error) => {
    // tslint:disable-next-line:no-console
    console.log(error);
  });

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started`);
});
