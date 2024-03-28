import { Module } from '@nestjs/common';

import { Shopper2Controller } from './controller/shopper2.controller';
import { Shopper2Service } from './services/shopper2.service';

@Module({
    controllers: [Shopper2Controller],
    providers: [Shopper2Service]
})
export class Shopper2Module {}