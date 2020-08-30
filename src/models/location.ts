import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Server } from "./server";
import { Switch } from "./switch";

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @OneToMany((type) => Server, (server) => server.location)
  servers: Server[];
  @OneToMany((type) => Switch, (sw) => sw.location)
  switches: Switch[];
}
