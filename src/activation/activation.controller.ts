import { Controller, Get, Logger, Patch } from '@nestjs/common';

@Controller('activation')
export class ActivationController {
  private logger = new Logger(ActivationController.name);

  @Get('/')
  async getInactivatedCabinet(): Promise<void> {
    this.logger.log('call getInactivatedCabinet()');
  }

  @Patch('/')
  async patchActivation(): Promise<void> {
    this.logger.log('call patchActivation()');
  }

  @Get('/ban')
  async getBanCabinet(): Promise<void> {
    this.logger.log('call getBanCabinet()');
  }
}
