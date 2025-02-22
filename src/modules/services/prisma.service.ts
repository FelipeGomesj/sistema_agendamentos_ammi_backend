import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect();
    console.log("Conectado ao banco de dados com sucesso! 🚀");
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}