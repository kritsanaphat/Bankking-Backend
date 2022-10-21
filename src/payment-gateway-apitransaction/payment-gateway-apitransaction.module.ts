import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PaymentGatewayApitransaction } from './entities/payment-gateway-apitransaction.entity'
import { PaymentGatewayApitransactionService } from './payment-gateway-apitransaction.service';
import { PaymentGatewayApitransactionController } from './payment-gateway-apitransaction.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([PaymentGatewayApitransaction]),
    
  ],
  controllers: [PaymentGatewayApitransactionController],
  providers: [PaymentGatewayApitransactionService]
})
export class PaymentGatewayApitransactionModule {}
