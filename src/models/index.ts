import { createConnection } from "typeorm";
import "reflect-metadata";

export const migrate = () => {
  return createConnection({
    type: "postgres",
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT),
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    entities: [__dirname + "/*.js"],
    synchronize: true,
    logging: false,
  });
};
