import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Switch } from "./switch";
import { NetworkInterfaceCard } from "./networkInterfaceCard";

@Entity()
export class SwitchPort {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  portNumber: string;
  @ManyToOne((type) => Switch, (sw) => sw.ports)
  switch: Switch;
  @OneToOne((type) => NetworkInterfaceCard, (nic) => nic.switchPort)
  networkInterfaceCard: NetworkInterfaceCard;
}
