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
  @Column()
  name: string;
  @Column()
  macAddress: string;
  @Column()
  bandWidth: string;
  @ManyToOne((type) => Server, (server) => server.networkInterfaceCards)
  server: Server;
  @OneToOne((type) => SwitchPort, (swPort) => swPort.networkInterfaceCard)
  switchPort: SwitchPort;
}
