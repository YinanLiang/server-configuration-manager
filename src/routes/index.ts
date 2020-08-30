import * as express from "express";
import { getRepository } from "typeorm";
import { Location } from "../entities/location";

export const register = (app: express.Application) => {
  app.get("/", (req: any, res) => {
    res.send("Hello World");
  });

  app.get("/locations/:id", (req, res) => {
    const locationId = req.params.id;
    getRepository(Location)
      .findOne(locationId)
      .then((location) => {
        res.send(JSON.stringify(location));
      });
  });

  app.get("/locations", (req, res) => {
    getRepository(Location)
      .find()
      .then((location) => {
        res.send(JSON.stringify(location));
      });
  });

  app.post("/locations", (req, res) => {
    const location = new Location();
    location.name = req.body.name;
    location.description = req.body.description;
    getRepository(Location)
      .save(location)
      .then((createdLocation) => {
        res.status(201).json(createdLocation);
      });
  });
};
