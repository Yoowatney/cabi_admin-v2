import { Injectable, Logger } from '@nestjs/common';
import { ISearchRepository } from './repository/ISearchRepository';

@Injectable()
export class SearchService {
  private logger = new Logger(SearchService.name);
  constructor(private searchRepository: ISearchRepository) {}
  async getLentByIntraId(intraId: string) {
    this.logger.debug('call getLentByIntraId');
    const result = await this.searchRepository.getLentByIntraId(intraId);
    return { lentInfo: result };
  }

  async getLentLogByIntraId(intraId: string) {
    this.logger.debug('call getLentLogByIntraId');
    const result = await this.searchRepository.getLentLogByIntraId(intraId);
    return { lentInfo: result };
  }

  async getLentByCabinetNum(cabinetNum: number, floor: number) {
    this.logger.debug('call getLentByCabinetNum');
    const result = await this.searchRepository.getLentByCabinetNum(
      cabinetNum,
      floor,
    );
    return { lentInfo: result };
  }

  async getLentLogByCabinetNum(cabinetNum: number, floor: number) {
    this.logger.debug('call getLentLogByCabinetNum');
    const result = await this.searchRepository.getLentLogByCabinetNum(
      cabinetNum,
      floor,
    );
    return { lentInfo: result };
  }
}
