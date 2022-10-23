import { UserNotificationTransaction } from "../entities/user-notification-transaction.entity"
export class CreateUserNotificationTransactionDto {
tiID : string
accountID: string
transactionID: string
isRead : boolean
created_at: Date
updated_at  :Date;
deleted_at  :Date;
}
