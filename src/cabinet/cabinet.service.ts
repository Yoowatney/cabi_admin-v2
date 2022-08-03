import { Injectable, Logger } from '@nestjs/common';
import { CabinetFloorResponseDto } from './dto/cabinet-floor.response.dto';
import { ICabinetRepository } from './repository/ICabinetRepository';

@Injectable()
export class CabinetService {
  private logger = new Logger(CabinetService.name);

  constructor(private cabinetRepository: ICabinetRepository) {}

  async getCabinetCountFloor(): Promise<CabinetFloorResponseDto> {
    this.logger.debug('call getCabinetCountFloor');
    const result = await this.cabinetRepository.findAll();
    return {
      cabinetFloor: result,
    };
  }
}
