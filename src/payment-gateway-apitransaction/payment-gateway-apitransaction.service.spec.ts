import { Test, TestingModule } from '@nestjs/testing';
import { PaymentGatewayApitransactionService } from './payment-gateway-apitransaction.service';

describe('PaymentGatewayApitransactionService', () => {
  let service: PaymentGatewayApitransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentGatewayApitransactionService],
    }).compile();

    service = module.get<PaymentGatewayApitransactionService>(PaymentGatewayApitransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
