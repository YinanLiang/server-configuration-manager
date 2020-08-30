import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Location } from "./location";
import { NetworkInterfaceCard } from "./networkInterfaceCard";

@Entity()
export class Server {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  ip: string;

  @Column({ nullable: true })
  immIp: string;

  @Column({ nullable: true })
  hostname: string;

  @Column({ nullable: true })
  brand: string;

  @Column({ nullable: true })
  model: string;

  @Column({ nullable: true })
  type: string;

  @Column({ nullable: true })
  serialNumber: string;

  @ManyToOne((type) => Location, (location) => location.servers, {
    cascade: true,
  })
  location: Location;

  @ManyToOne((type) => NetworkInterfaceCard, (nic) => nic.server, {
    cascade: true,
  })
  networkInterfaceCards: NetworkInterfaceCard;

  constructor(obj?: any) {
    this.id = obj && obj.id;
    this.ip = obj && obj.ip;
    this.immIp = obj && obj.immIp;
    this.hostname = obj && obj.hostname;
    this.brand = obj && obj.brand;
    this.model = obj && obj.model;
    this.type = obj && obj.type;
    this.serialNumber = obj && obj.serialNumber;
  }
}
