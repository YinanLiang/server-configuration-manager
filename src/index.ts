import express from "express";
import dotnev from "dotenv";
import path from "path";

dotnev.config();

const port = process.env.SERVER_PORT;
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started`);
});
