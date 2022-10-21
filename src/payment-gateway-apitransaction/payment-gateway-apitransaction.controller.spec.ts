import { Test, TestingModule } from '@nestjs/testing';
import { PaymentGatewayApitransactionController } from './payment-gateway-apitransaction.controller';
import { PaymentGatewayApitransactionService } from './payment-gateway-apitransaction.service';

describe('PaymentGatewayApitransactionController', () => {
  let controller: PaymentGatewayApitransactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentGatewayApitransactionController],
      providers: [PaymentGatewayApitransactionService],
    }).compile();

    controller = module.get<PaymentGatewayApitransactionController>(PaymentGatewayApitransactionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
