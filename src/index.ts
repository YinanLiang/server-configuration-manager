import express from "express";
import dotnev from "dotenv";
import path from "path";
import * as routes from "./routes";

dotnev.config();

const port = process.env.SERVER_PORT;
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

routes.register(app);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started`);
});
