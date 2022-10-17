
 import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PaymentTransaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  title: string;

  @Column({ length: 255 })
  remark: string;
}