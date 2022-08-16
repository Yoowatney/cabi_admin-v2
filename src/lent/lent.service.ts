import { Injectable, Logger } from '@nestjs/common';
import { LentInfoResponseDto } from './dto/lent-info.response.dto';
import { ILentRepository } from './repository/ILentRepository';

@Injectable()
export class LentService {
  private logger = new Logger(LentService.name);

  constructor(private cabinetRepository: ILentRepository) {}

  async getLentUserInfo(): Promise<LentInfoResponseDto> {
    this.logger.debug('call getLentUserInfo');
    const result = await this.cabinetRepository.findAll();

    return { lentInfo: result };
  }
}
