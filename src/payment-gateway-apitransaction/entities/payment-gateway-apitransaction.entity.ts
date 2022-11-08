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
      transactionID: string;

    @Column({
        type: 'varchar',
      })
      shopAccountNumber: string;

    @CreateDateColumn()
      datetime: Date

    @Column({
        type: 'float',
      })
      fee :number;
      
    @Column({
        type: 'float',
      })
      amount :number;

    @Column({
        type: 'enum',
        enum: Payment_Type
    })
    type: Payment_Type;

    @Column({
        type: 'varchar'
    })
    userAccountName : string;

    @Column({
      default: false
    })
    isFinish : boolean

    @CreateDateColumn()
    created_at: Date
  
    @UpdateDateColumn()
    updated_at  :Date;
  
    @DeleteDateColumn()
    deleted_at  :Date;

}

export namespace PaymentGatewayApitransaction{
    export enum Payment_Type{
        TRANSFER = 'transfer',
        RECEIVE = 'receive',
        WITHDRAW = 'withdraw',
        DEPOSIT = 'deposit',
        QR_PAYMENT = ' qrPayment'
    }
}