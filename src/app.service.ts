import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY')
    private apykey: string,

    @Inject('TASKS')
    private tasks: any,
  ) {}
  getHello(): string {
    console.log(this.tasks);
    return `hola ${this.apykey}`;
  }
}
