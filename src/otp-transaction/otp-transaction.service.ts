import { Injectable } from '@nestjs/common';
import { CreateOtpTransactionDto } from './dto/create-otp-transaction.dto';
import { UpdateOtpTransactionDto } from './dto/update-otp-transaction.dto';

@Injectable()
export class OtpTransactionService {
  create(createOtpTransactionDto: CreateOtpTransactionDto) {
    return 'This action adds a new otpTransaction';
  }

  findAll() {
    return `This action returns all otpTransaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} otpTransaction`;
  }

  update(id: number, updateOtpTransactionDto: UpdateOtpTransactionDto) {
    return `This action updates a #${id} otpTransaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} otpTransaction`;
  }
}
