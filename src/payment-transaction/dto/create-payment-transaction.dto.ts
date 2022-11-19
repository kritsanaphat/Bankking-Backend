import { PaymentTransaction } from '../entities/payment-transaction.entity'

export class CreatePaymentTransactionDto {
  transactionID?: string;
  IPAddress: string;
  userAccountNumber: string;
  otherAccountNumber: string;
  accountID: string;
  nameOther: string;
  bankNameOther: PaymentTransaction.BankName_Type;
  amount :number;
  fee :number;
  balanced:number;
  type: PaymentTransaction.Payment_Type;
  date: Date | string;
  created_at?:Date;
  updated_at?  :Date;
  deleted_at?  :Date;
}



