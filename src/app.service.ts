import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('API_KEY') private apykey: string){}
  getHello(): string {
    return `hola ${this.apykey}`;
  }
}
