import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Location } from "./location";
import { NetworkInterfaceCard } from "./networkInterfaceCard";

@Entity()
export class Server {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  ip: string;
  @Column()
  immIp: string;
  @Column()
  hostname: string;
  @Column()
  brand: string;
  @Column()
  model: string;
  @Column()
  type: string;
  @Column()
  serialNumber: string;
  @ManyToOne((type) => Location, (location) => location.servers)
  location: Location;
  @ManyToOne((type) => NetworkInterfaceCard, (nic) => nic.server)
  networkInterfaceCards: NetworkInterfaceCard;
}
