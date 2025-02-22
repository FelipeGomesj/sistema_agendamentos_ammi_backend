import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { CreateUserDto } from './create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async checkEmailExists(email: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return !!user;
  }


  async createUser(createUserDto: CreateUserDto) {
    const { email, name, password } = createUserDto;
    console.log("bateu no service: createUser BACKEND");
    // Verificar se o e-mail já está cadastrado
    const emailExists = await this.checkEmailExists(email);
    if (emailExists) {
      throw new BadRequestException('E-mail já cadastrado. Tente recuperar sua senha.');
    }

    // Hashear a senha antes de salvar
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar o usuário no banco de dados
    const user = await this.prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role: 'CLIENT',
      },
    });

    return user;
  }

}