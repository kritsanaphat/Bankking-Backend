import { PaymentGatewayApitransaction } from "../entities/payment-gateway-apitransaction.entity";
            
export class CreatePaymentGatewayApitransactionDto {
   
    transactionID: string;
    shopAccountNumber: string;
    datetime: Date
    fee :number;
    amount :number
    type: PaymentGatewayApitransaction.Payment_Type; 
    userAccountName : string;
    isFinish: boolean;
    created_at: Date
    updated_at  :Date;
    deleted_at  :Date;
    
}
