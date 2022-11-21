import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';


import { PaymentTransactionService } from './payment-transaction.service';
import { CreatePaymentTransactionDto , RequestTransactionDto} from './dto/create-payment-transaction.dto';
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

  @Post('month')
  findbyMonth(@Body() requestTransactionDto: RequestTransactionDto) {
    return this.paymentTransactionService.findbyMonth(requestTransactionDto);
  }

  @Post('summary-date')
  findSumOfDate(@Body() requestTransactionDto: RequestTransactionDto) {
    return this.paymentTransactionService.findSumOfDate(requestTransactionDto);
  }

  @Post('summary-month')
  findSumOfMonth(@Body() requestTransactionDto: RequestTransactionDto) {
    return this.paymentTransactionService.findSumOfMonth(requestTransactionDto);
  }
}
