import { PaymentTransaction } from '../entities/payment-transaction.entity'

export class CreatePaymentTransactionDto {
  transactionID: string;
  refNumber: string;
  IPAddress: string;
  userAccountNumber: string;
  otherAccountNumber: string;
  nameOther: string;
  bankNameOther: PaymentTransaction.BankName_Type;
  amount :number;
  fee :number;
  type: PaymentTransaction.Payment_Type;
  created_at :Date;
  updated_at  :Date;
  deleted_at  :Date;
}



