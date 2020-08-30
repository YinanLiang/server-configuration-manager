import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Server } from "./server";
import { SwitchPort } from "./switchPort";

@Entity()
export class NetworkInterfaceCard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  macAddress: string;

  @Column({ nullable: true })
  bandWidth: string;

  @ManyToOne((type) => Server, (server) => server.networkInterfaceCards)
  server: Server;

  @OneToOne((type) => SwitchPort, (swPort) => swPort.networkInterfaceCard)
  switchPort: SwitchPort;

  constructor(obj?: any) {
    this.id = obj && obj.id;
    this.name = obj && obj.name;
    this.macAddress = obj && obj.macAddress;
    this.bandWidth = obj && obj.bandWidth;
  }
}
