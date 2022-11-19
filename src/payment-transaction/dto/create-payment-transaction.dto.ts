import { PaymentTransaction } from '../entities/payment-transaction.entity'

export class CreatePaymentTransactionDto {
  transactionID: string;
  IPAddress: string;
  userAccountNumber: string;
  otherAccountNumber: string;
  accountID: string;
  nameOther: string;
  bankNameOther: PaymentTransaction.BankName_Type;
  amount :number;
  fee :number;
  type: PaymentTransaction.Payment_Type;
  created_at :Date;
  updated_at  :Date;
  deleted_at  :Date;
}



