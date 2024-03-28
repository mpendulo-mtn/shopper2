import { Controller, Get, Inject } from '@nestjs/common';

import { Shopper2Service } from '../services/shopper2.service';

@Controller('shopper2')
export class Shopper2Controller {
    @Inject(Shopper2Service)
    private readonly shopper2Service: Shopper2Service;

    constructor(shopper2Service: Shopper2Service) {
        this.shopper2Service = shopper2Service;
    }

    @Get()
    findAll(): string {
        return this.shopper2Service.findAll();
    }
}