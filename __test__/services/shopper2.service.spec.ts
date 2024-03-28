import { Test, TestingModule } from '@nestjs/testing';
import { Shopper2Service } from '../../src/services/shopper2.service';

describe('Shopper2Service', () => {
  let service: Shopper2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Shopper2Service],
    }).compile();

    service = module.get<Shopper2Service>(Shopper2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a string', () => {
      const result = service.findAll();
      expect(result).toEqual(expect.any(String));
    });

    it('should return a greeting message', () => {
      const result = service.findAll();
      expect(result).toEqual('Hello from shopper2 service');
    });
  });
});
