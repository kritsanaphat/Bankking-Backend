
 import { 
  Entity, Column, PrimaryGeneratedColumn, 
  CreateDateColumn, UpdateDateColumn, DeleteDateColumn
} from 'typeorm';

enum BankName_Type{
  d4QU = '4QU'
}
enum Payment_Type{
  TRANSFER = 'transfer',
  RECEIVE = 'receive',
  WITHDRAW = 'withdraw',
  DEPOSIT = 'deposit'
}

@Entity()
export class PaymentTransaction {

  @PrimaryGeneratedColumn(
    'uuid'
    )
  transactionID: string;

  @Column({
    type: 'uuid',
  })
  refNumber: string;

  @Column({
    type: 'varchar',
  })
  IPAddress: string;

  @Column({
    type: 'varchar',
  })
  userAccountNumber: string;

  @Column({
    type: 'varchar',
  })
  otherAccountNumber: string;

  @Column({
    type: 'varchar',
  })
  nameOther: string;

  @Column({
    type: 'enum',
    enum : BankName_Type,
    default: BankName_Type.d4QU
  })
  bankNameOther: BankName_Type;

  @Column({
    type: 'float',
  })
  amount :number;

  @Column({
    type: 'float',
  })
  fee :number;
  
  @Column({
    type: 'enum',
    enum : Payment_Type,
  })
  type: Payment_Type;

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at  :Date;

  @DeleteDateColumn()
  deleted_at  :Date;
  
}


export namespace PaymentTransaction {
  export enum BankName_Type{d4QU = '4QU'}
  export enum Payment_Type{TRANSFER = 'transfer',RECEIVE = 'receive',WITHDRAW = 'withdraw',DEPOSIT = 'deposit'}

}