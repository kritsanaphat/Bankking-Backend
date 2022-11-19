import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PaymentGatewayApitransaction } from './entities/payment-gateway-apitransaction.entity'
import { PaymentGatewayApitransactionService } from './payment-gateway-apitransaction.service';
import { PaymentGatewayApitransactionController } from './payment-gateway-apitransaction.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([PaymentGatewayApitransaction]),
    
  ],
  controllers: [PaymentGatewayApitransactionController],
  providers: [PaymentGatewayApitransactionService]
})
export class PaymentGatewayApitransactionModule {}
