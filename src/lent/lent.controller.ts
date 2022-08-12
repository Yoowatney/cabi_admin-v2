import { Controller, Get, Logger } from '@nestjs/common';

@Controller('lent')
export class LentController {
  private logger = new Logger(LentController.name);

  @Get('/')
  async getLentInfo(): Promise<void> {
    this.logger.log('call getLentInfo()');
  }

  @Get('/overdue')
  async getLentOverdueInfo(): Promise<void> {
    this.logger.log('call getLentOverdueInfo()');
  }
}
