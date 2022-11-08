import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { PaymentGatewayApitransactionService } from './payment-gateway-apitransaction.service';
import { CreatePaymentGatewayApitransactionDto } from './dto/create-payment-gateway-apitransaction.dto';
import { UpdatePaymentGatewayApitransactionDto } from './dto/update-payment-gateway-apitransaction.dto';

@Controller('payment-gateway-apitransaction')
export class PaymentGatewayApitransactionController {
  constructor(private readonly paymentGatewayApitransactionService: PaymentGatewayApitransactionService) {}

  @Post()
  create(@Body() createPaymentGatewayApitransactionDto: CreatePaymentGatewayApitransactionDto) {
    return this.paymentGatewayApitransactionService.create(createPaymentGatewayApitransactionDto);
  }

  @Get()
  findAll() {
    return this.paymentGatewayApitransactionService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.paymentGatewayApitransactionService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('isFinish') id: string, @Body() updatePaymentGatewayApitransactionDto: UpdatePaymentGatewayApitransactionDto) {
    return this.paymentGatewayApitransactionService.update(id, updatePaymentGatewayApitransactionDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.paymentGatewayApitransactionService.remove(id);
  // }
}
