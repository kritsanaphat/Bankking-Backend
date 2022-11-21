import { PaymentTransaction } from '../entities/payment-transaction.entity'


export class CreateStatementTransactionDto{
    userAccountID: string;
    userAccountNumber: string;
    destEmail: string;
    accountName: string;
    name:string
    Date: string;
}
