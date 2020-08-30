import express from "express";
import dotnev from "dotenv";
import * as routes from "./routes";
import * as models from "./models";

dotnev.config();

const port = process.env.SERVER_PORT;
const app = express();

routes.register(app);
models
  .migrate()
  .then((connection) => {
    // tslint:disable-next-line:no-console
    console.log("Connection Established");
  })
  .catch((error) => {
    // tslint:disable-next-line:no-console
    console.log(error);
  });

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started`);
});
