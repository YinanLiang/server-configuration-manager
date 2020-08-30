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

  @Column({ nullable: true })
  ip: string;

  @Column({ nullable: true })
  model: string;

  @Column({ nullable: true })
  osVersion: string;

  @Column({ nullable: true })
  serialNumber: string;

  @ManyToOne((type) => Location, (location) => location.switches, {
    cascade: true,
  })
  location: Location;

  @OneToMany((type) => SwitchPort, (swPort) => swPort.switch, {
    cascade: true,
  })
  ports: SwitchPort[];

  constructor(obj?: any) {
    this.id = obj && obj.id;
    this.ip = obj && obj.ip;
    this.model = obj && obj.model;
    this.osVersion = obj && obj.osVersion;
    this.serialNumber = obj && obj.serialNumber;
  }
}
