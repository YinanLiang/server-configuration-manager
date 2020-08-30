import express from "express";
import dotnev from "dotenv";
import * as routes from "./routes";
import { createConnection } from "typeorm";

dotnev.config();

const port = process.env.SERVER_PORT;
const app = express();

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
