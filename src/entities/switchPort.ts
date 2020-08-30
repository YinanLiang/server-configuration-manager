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

  @Column({ nullable: true })
  portNumber: string;

  @ManyToOne((type) => Switch, (sw) => sw.ports, { cascade: true })
  switch: Switch;

  @OneToOne((type) => NetworkInterfaceCard, (nic) => nic.switchPort)
  networkInterfaceCard: NetworkInterfaceCard;

  constructor(obj?: any) {
    this.id = obj && obj.id;
    this.portNumber = obj && obj.portNumber;
  }
}
