import {
  Body,
  Controller,
  Get,
  Logger,
  Patch,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ActivationService } from './activation.service';
import { BanCabinetResponseDto } from './dto/ban-cabinet.response.dto';
import { InactivatedCabinetResponseDto } from './dto/inactivated-cabinet.response.dto';
import { PatchActivationDto } from './dto/patch-activation.dto';

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
  @UsePipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  )
  async patchActivation(
    @Body()
    cabinetInfo: PatchActivationDto,
  ): Promise<boolean> {
    this.logger.log('call patchActivation(), data : ', cabinetInfo);
    return await this.activationService.patchActivation(cabinetInfo);
  }

  @Get('/ban')
  async getBanCabinet(): Promise<BanCabinetResponseDto> {
    this.logger.log('call getBanCabinet()');
    return await this.activationService.getBanCabientList();
  }
}
