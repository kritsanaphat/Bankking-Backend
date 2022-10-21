import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentGatewayApitransactionDto } from './create-payment-gateway-apitransaction.dto';

export class UpdatePaymentGatewayApitransactionDto extends PartialType(CreatePaymentGatewayApitransactionDto) {}
