import { Test, TestingModule } from '@nestjs/testing';
import { Shopper2Controller } from '../../src/controller/shopper2.controller';
import { Shopper2Service } from '../../src/services/shopper2.service';

describe('Shopper2Controller', () => {
  let controller: Shopper2Controller;
  let service: Shopper2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Shopper2Controller],
      providers: [Shopper2Service],
    }).compile();

    controller = module.get<Shopper2Controller>(Shopper2Controller);
    service = module.get<Shopper2Service>(Shopper2Service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a string from the service', () => {
      const mockResponse = 'Mock response from service';
      jest.spyOn(service, 'findAll').mockReturnValue(mockResponse);

      const result = controller.findAll();
      expect(result).toEqual(mockResponse);
    });
  });
});
