import { PaymentGatewayApitransaction } from "../entities/payment-gateway-apitransaction.entity";
            
export class CreatePaymentGatewayApitransactionDto {
   
    transactionID:string;
    shopID: string;
    shopAccountNumber: string;
    userAccountNumber: string;
    nameUser: string;
    bankNameUser: PaymentGatewayApitransaction.BankName_Type;
    amount: number;
    balance: number;
    fee: number;
    type: PaymentGatewayApitransaction.Payment_Type;;
    isFinish?: boolean;
    date: Date;
    created_at?: Date
    updated_at?  :Date;
    deleted_at?  :Date;
    
}
