import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY')
    private apykey: string,

    @Inject('TASKS')
    private tasks: any[],

    private config: ConfigService,
  ) {}

  getHello(): string {
    const apikey = this.config.get('API_KEY');
    const db = this.config.get('DATABASE_NAME');
    return `hola ${apikey}, ${db}`;
  }
}
