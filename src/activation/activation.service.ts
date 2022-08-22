import { Injectable, Logger } from '@nestjs/common';
import { BanCabinetResponseDto } from './dto/ban-cabinet.response.dto';
import { InactivatedCabinetResponseDto } from './dto/inactivated-cabinet.response.dto';
import { PatchActivationDto } from './dto/patch-activation.dto';
import { IActivationRepository } from './repository/IActivationRepository';

@Injectable()
export class ActivationService {
  private logger = new Logger(ActivationService.name);

  constructor(private activationRepository: IActivationRepository) {}

  async getInactivatedCabinetList(): Promise<InactivatedCabinetResponseDto> {
    this.logger.debug('call getInactivatedCabinet');
    const result = await this.activationRepository.getInactivatedCabinetList();
    return {
      cabinetList: result,
    };
  }

  async getBanCabientList(): Promise<BanCabinetResponseDto> {
    this.logger.debug('call getBanCabinet');
    const result = await this.activationRepository.getBanCabinetList();
    return {
      cabinetList: result,
    };
  }

  async patchActivation(cabinetInfo: PatchActivationDto): Promise<boolean> {
    this.logger.debug('call patchActivation');
    const result = await this.activationRepository.patchActivation(cabinetInfo);
    return result;
  }
}
