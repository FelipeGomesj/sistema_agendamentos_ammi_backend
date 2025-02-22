import { Controller, Get, Query, BadRequestException, Body, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('check-email')
  async checkEmail(@Query('email') email: string) {
    if (!email) {
      throw new BadRequestException('E-mail é obrigatório');
    }

    await this.userService.checkEmailExists(email);

    //if (exists) {
    //  throw new BadRequestException('E-mail já cadastrado. Tente recuperar sua senha.');
   // }

    return { message: 'E-mail disponível para cadastro' };
  }

  @Post('create-user')
  async createUser(@Body() createUserDto: CreateUserDto) {
    console.log("bateu no endpoint: create-user");
    const user = await this.userService.createUser(createUserDto);
    return user;
  }
}
