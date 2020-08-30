import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Server } from "./server";
import { Switch } from "./switch";

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany((type) => Server, (server) => server.location)
  servers: Server[];

  @OneToMany((type) => Switch, (sw) => sw.location)
  switches: Switch[];

  constructor(req?: any) {
    this.id = req && req.id;
    this.name = req && req.name;
    this.description = req && req.description;
  }
}
