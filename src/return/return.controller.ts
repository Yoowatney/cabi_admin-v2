import { Controller, Get, Logger, Patch } from '@nestjs/common';

@Controller('return')
export class ReturnController {
  private logger = new Logger(ReturnController.name);

  @Get('/')
  async getReturn(): Promise<void> {
    this.logger.log('call getReturn()');
  }

  @Patch('/overdue')
  async patchReturn(): Promise<void> {
    this.logger.log('call patchReturn()');
  }
}
