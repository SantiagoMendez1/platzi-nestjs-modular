import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY')
    private apykey: string,

    @Inject('TASKS')
    private tasks: any[],

    @Inject(config.KEY) private configService: ConfigType<typeof config>

  ) {}

  getHello(): string {
    const apikey = this.configService.apikey;
    const db = this.configService.database.name;
    return `hola ${apikey}, ${db}`;
  }
}
