import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['major-whale-11716-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'bWFqb3Itd2hhbGUtMTE3MTYk_fRKqKgEUvJcjpUJJw8T-avwfIQbhvs04kcmS6c',
          password:
            'K2GIDj3FjBkgcju3pJJFekpiS4fqDNJVWBZDnd6qCEbVsj5K0n6gvuPl_MmyVgGuj5g7aA==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
