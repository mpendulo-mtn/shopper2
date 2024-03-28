import { NestFactory } from '@nestjs/core';

import { Shopper2Module } from './shopper2.module';

const bootstrap = async () => {
    const app = await NestFactory.create(Shopper2Module);
    await app.listen(3000);
}

bootstrap();