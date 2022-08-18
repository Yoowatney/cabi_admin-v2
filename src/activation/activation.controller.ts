import { Controller, Get, Logger, Patch } from '@nestjs/common';
import { ActivationService } from './activation.service';
import { InactivatedCabinetResponseDto } from './dto/inactivated-cabinet.response.dto';

@Controller('activation')
export class ActivationController {
  constructor(private activationService: ActivationService) {}

  private logger = new Logger(ActivationController.name);

  @Get('/')
  async getInactivatedCabinet(): Promise<InactivatedCabinetResponseDto> {
    this.logger.log('call getInactivatedCabinet()');
    return await this.activationService.getInactivatedCabinetList();
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
