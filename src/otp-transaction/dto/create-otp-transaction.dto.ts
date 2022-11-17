import { OtpTransaction } from '../entities/otp-transaction.entity'

export class CreateOtpTransactionDto {
    transactionID: string;
    refNumber: string;
    type: OtpTransaction.UserActivity_Type;
    timeStart :Date;
    isFinished: boolean;
    IPAddress: string;
    created_at: Date    
    updated_at  :Date;
    deleted_at  :Date;
    
  }