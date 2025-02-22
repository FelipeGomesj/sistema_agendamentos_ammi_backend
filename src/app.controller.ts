import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './modules/services/prisma.service';

@Controller()
export class AppController {
  [x: string]: any;
  constructor(private readonly prisma: PrismaService) {}


  @Get('test-db')
  async testDatabase() {
    const users = await this.prisma.user.findMany();
    return { message: "Banco de dados funcionando!", users };
  }

  //Rota para teste de comunicação entre frontend e backend

  @Get('test')
  getTest():string {
    return 'Backend está funcionando e comunicando com o Frontend. 🚀!';
  }
}
