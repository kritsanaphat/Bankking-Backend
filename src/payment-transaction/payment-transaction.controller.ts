import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';


import { PaymentTransactionService } from './payment-transaction.service';
import { CreatePaymentTransactionDto } from './dto/create-payment-transaction.dto';
import { UpdatePaymentTransactionDto } from './dto/update-payment-transaction.dto';
import { PaymentTransaction } from './entities/payment-transaction.entity';
import { CreateOtpTransactionDto } from 'src/otp-transaction/dto/create-otp-transaction.dto';

@Controller('payment-transaction')
export class PaymentTransactionController {
  constructor(private readonly paymentTransactionService: PaymentTransactionService) {}

  @Post()
  create(@Body() createPaymentTransactionDto: CreatePaymentTransactionDto) {
    return this.paymentTransactionService.create(createPaymentTransactionDto);
  }

  @Get()
  findAll() {
    return this.paymentTransactionService.findAll()
  }

  @Get(':id')
  findbyDate(@Param('id') id: string) {
    return this.paymentTransactionService.findbyDate(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePaymentTransactionDto: UpdatePaymentTransactionDto) {
  //   return this.paymentTransactionService.update(+id, updatePaymentTransactionDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.paymentTransactionService.remove(Number(id));
  // }
}
