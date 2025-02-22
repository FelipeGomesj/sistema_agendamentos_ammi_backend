import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new UnauthorizedException('Usuário ou senha incorretos');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Usuário ou senha incorretos');
    }

    return { id: user.id, email: user.email, name: user.name, role: user.role };
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    const payload = { sub: user.id, email: user.email, role: user.role };

    return {
      access_token: this.jwtService.sign(payload, { secret: 'seuSegredo', expiresIn: '1h' }),
      user,
    };
  }
}