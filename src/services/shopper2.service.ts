import { Injectable } from '@nestjs/common';

@Injectable()
export class Shopper2Service {
    findAll(): string {
        return 'Hello from shopper2 service';
    }
}