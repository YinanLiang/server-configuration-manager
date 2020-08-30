import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Location } from "./location";
import { SwitchPort } from "./switchPort";

@Entity()
export class Switch {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  ip: string;
  @Column()
  model: string;
  @Column()
  osVersion: string;
  @Column()
  serialNumber: string;
  @ManyToOne((type) => Location, (location) => location.switches)
  location: Location;
  @OneToMany((type) => SwitchPort, (swPort) => swPort.switch)
  ports: SwitchPort[];
}
