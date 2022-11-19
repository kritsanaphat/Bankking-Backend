import { 
    Entity, Column, PrimaryGeneratedColumn, 
    CreateDateColumn, UpdateDateColumn, DeleteDateColumn
  } from 'typeorm';

  enum Payment_Type{
    TRANSFER = 'transfer',
    RECEIVE = 'receive',
    WITHDRAW = 'withdraw',
    DEPOSIT = 'deposit',
    QR_PAYMENT = 'qrPayment'
  }
  
@Entity()
export class PaymentGatewayApitransaction {

    @PrimaryGeneratedColumn(
        'uuid'
        )
      shopID: string;

    @Column({
        type: 'varchar',
      })
      shopAccountNumber: string;

    @Column({
        type: 'varchar',
      })
      userAccountNumber: string;
    
    @Column({
        type: 'varchar'
    })
    nameUser : string;

    @Column({
      type: 'varchar'
    })
    bankNameUser : string;

    @Column()
      date: Date

    @Column({
        type: 'float',
      })
      fee :number;
      
    @Column({
        type: 'float',
      })
      amount :number;
    
    @Column({
        type: 'float',
      })
      balance :number;

    @Column({
        type: 'enum',
        enum: Payment_Type
    })
    type: Payment_Type;

    @Column({
      default: false
    })
    isFinish? : boolean

    @CreateDateColumn()
    created_at?: Date
  
    @UpdateDateColumn()
    updated_at?  :Date;
  
    @DeleteDateColumn()
    deleted_at?  :Date;

}

export namespace PaymentGatewayApitransaction{
  export enum BankName_Type{d4QU = '4QU'}
    export enum Payment_Type{
        TRANSFER = 'transfer',
        RECEIVE = 'receive',
        WITHDRAW = 'withdraw',
        DEPOSIT = 'deposit',
        QR_PAYMENT = ' qrPayment'
    }
}