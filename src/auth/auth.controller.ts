import { Controller, Get, Logger, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  private logger = new Logger(AuthController.name);

  @Post('/login')
  async postLogin(): Promise<void> {
    this.logger.log('call postLogin()');
  }

  @Get('/ban')
  async getBanUser(): Promise<void> {
    this.logger.log('call getBanUser()');
  }
}
