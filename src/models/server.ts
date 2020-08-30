import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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
}
