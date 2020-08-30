import * as express from "express";
import { getRepository } from "typeorm";
import { Location } from "../entities/location";
import { Server } from "../entities/server";

export const register = (app: express.Application) => {
  app.get("/locations/:id", (req, res) => {
    const locationId = req.params.id;
    getRepository(Location)
      .findOne(locationId)
      .then((location) => {
        // tslint:disable-next-line:no-console
        res.send(JSON.stringify(location));
      });
  });

  app.get("/locations", (req, res) => {
    getRepository(Location)
      .find()
      .then((locations) => {
        res.send(JSON.stringify(locations));
      })
      .catch((error) => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  });

  app.post("/locations", (req, res) => {
    const location = new Location(req.body);
    getRepository(Location)
      .save(location)
      .then((createdLocation) => {
        res.status(201).json(createdLocation);
      })
      .catch((error) => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  });

  app.post("/servers", (req, res) => {
    const server = new Server(req.body);
    server.location = new Location(req.body.location);
    getRepository(Server)
      .save(server)
      .then((createdServer) => {
        res.status(201).json(createdServer);
      })
      .catch((error) => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  });

  app.get("/servers", (req, res) => {
    getRepository(Server)
      .find({ relations: ["location"] })
      .then((servers) => {
        res.send(JSON.stringify(servers));
      })
      .catch((error) => {
        // tslint:disable-next-line:no-console
        console.log(error);
      });
  });
};
