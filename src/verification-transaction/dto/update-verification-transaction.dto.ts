import { PartialType } from '@nestjs/mapped-types';
import { CreateVerificationTransactionDto } from './create-verification-transaction.dto';

export class UpdateVerificationTransactionDto extends PartialType(CreateVerificationTransactionDto) {}
