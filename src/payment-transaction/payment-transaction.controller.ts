import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';


import { PaymentTransactionService } from './payment-transaction.service';
import { CreatePaymentTransactionDto } from './dto/create-payment-transaction.dto';
import { UpdatePaymentTransactionDto } from './dto/update-payment-transaction.dto';
import { PaymentTransaction } from './entities/payment-transaction.entity';
import { CreateOtpTransactionDto } from 'src/otp-transaction/dto/create-otp-transaction.dto';
import { CreateStatementTransactionDto } from './dto/create-statement-transaction.dto';

@Controller('payment-transaction')
export class PaymentTransactionController {
  constructor(private readonly paymentTransactionService: PaymentTransactionService) {}

  @Post()
  create(@Body() createPaymentTransactionDto: CreatePaymentTransactionDto) {
    return this.paymentTransactionService.create(createPaymentTransactionDto);
  }

  @Post('statement')
  createStatement(@Body() createStatementTransactionDto: CreateStatementTransactionDto) {
    return this.paymentTransactionService.createStatement(createStatementTransactionDto);
  }

  @Get()
  findAll() {
    return this.paymentTransactionService.findAll()
  }

  @Get('/:id')
  findbyMonth(@Param('id') id: string) {
    return this.paymentTransactionService.findbyMonth(id);
  }

  @Get('Sum-date/:id')
  findSumOfDate(@Param('id') id: string) {
    return this.paymentTransactionService.findSumOfDate(id);
  }

  @Get('Sum-month/:id')
  findSumOfMonth(@Param('id') id: string) {
    return this.paymentTransactionService.findSumOfMonth(id);
  }
}
