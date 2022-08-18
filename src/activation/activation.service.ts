import { Injectable, Logger } from '@nestjs/common';
import { BanCabinetResponseDto } from './dto/ban-cabinet.response.dto';
import { InactivatedCabinetResponseDto } from './dto/inactivated-cabinet.response.dto';
import { IActivationRepository } from './repository/IActivationRepository';

@Injectable()
export class ActivationService {
  private logger = new Logger(ActivationService.name);

  constructor(private activationRepository: IActivationRepository) {}

  async getInactivatedCabinetList(): Promise<InactivatedCabinetResponseDto> {
    this.logger.debug('call getInactivatedCabinet');
    const result = await this.activationRepository.findInactivate();
    return {
      cabinetList: result,
    };
  }

  async getBanCabientList(): Promise<BanCabinetResponseDto> {
    this.logger.debug('call getBanCabinet');
    const result = await this.activationRepository.findBan();
    return {
      cabinetList: result,
    };
  }
}
