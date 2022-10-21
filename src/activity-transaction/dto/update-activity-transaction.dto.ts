import { PartialType } from '@nestjs/mapped-types';
import { CreateActivityTransactionDto } from './create-activity-transaction.dto';

export class UpdateActivityTransactionDto extends PartialType(CreateActivityTransactionDto) {}
