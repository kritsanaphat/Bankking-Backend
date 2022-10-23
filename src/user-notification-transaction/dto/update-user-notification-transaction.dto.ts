import { PartialType } from '@nestjs/mapped-types';
import { CreateUserNotificationTransactionDto } from './create-user-notification-transaction.dto';

export class UpdateUserNotificationTransactionDto extends PartialType(CreateUserNotificationTransactionDto) {}
