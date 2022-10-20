import { PartialType } from '@nestjs/mapped-types';
import { CreateOtpTransactionDto } from './create-otp-transaction.dto';

export class UpdateOtpTransactionDto extends PartialType(CreateOtpTransactionDto) {}
