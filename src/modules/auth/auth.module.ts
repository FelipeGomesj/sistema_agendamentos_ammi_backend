import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../services/prisma.service'; // 🔹 Importando PrismaService
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'seuSegredo', // 🔹 Use process.env.JWT_SECRET em produção
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService], // 🔹 Adicionando PrismaService
  exports: [AuthService],
})
export class AuthModule {}